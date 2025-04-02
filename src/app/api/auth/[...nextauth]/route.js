import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';

import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        if (existingUser) {
          const linkedAccount = await prisma.account.findFirst({
            where: {
              provider: account.provider,
              userId: existingUser.id,
            },
          });

          if (!linkedAccount) {
            await prisma.account.create({
              data: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                userId: existingUser.id,
                type: 'oauth',
              },
            });
          }
          return true;
        } else {
          const newUser = await prisma.user.create({
            data: {
              name: profile.name,
              email: profile.email,
              image: profile.picture,
            },
          });

          await prisma.account.create({
            data: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              userId: newUser.id,
              type: 'oauth',
            },
          });

          return true;
        }
      }
      return true;
    },

    async jwt({ token, user, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.email = profile.email;
        token.role = 'USER';
      }

      if (user) {
        token.id = user.id;
        token.role = user.role || 'USER';
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role;
      }

      if (token?.id) {
        session.user.id = token.id;
      }

      if (token?.email) {
        session.user.email = token.email;
      }

      return session;
    },

  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/unauthorized",
  },

  debug: true,
});

export { handler as GET, handler as POST };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://10.76.139.146:3000'], // Replace with your actual IP if different
  },
  async redirects() {
    return [
      {
        source: "/admin-dashboard",
        has: [
          {
            type: "cookie",
            key: "next-auth.session-token",
            value: "(.*)",
          },
        ],
        permanent: false,
        destination: "/login",
      },
    ];
  },
};
export default nextConfig;
//module.exports = nextConfig;

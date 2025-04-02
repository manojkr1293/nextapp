"use client";

import { useEffect, useState } from "react";
import { signIn,useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    // Redirect based on user role after successful login
    if (status === "authenticated") {
      if (session.user.role === "USER") {
        router.push("/dashboard");
      } 
    }
  }, [status, session]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true, // Let NextAuth handle the redirect
      callbackUrl: "/dashboard", // Default URL
    });

    if (res?.error) {
      setError("Invalid credentials");
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="login-container bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {error && <p className="error text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
    <button
      onClick={() => signIn("google")}
      className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
    >
      Login with Google
    </button>
    <div className="mt-4 w-full py-2 px-4 border text-center border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
    <Link href="/register" >Register</Link>
    </div>
    
  </div>
</div>

  );
}

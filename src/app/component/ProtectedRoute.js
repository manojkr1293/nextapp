"use client"; // Ensure this is a client component

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, roleRequired }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load

    if (!session) {
      router.push("/login"); // Redirect to login if user is not authenticated
    } else if (roleRequired && session?.user?.role !== roleRequired) {
      router.push("/unauthorized"); // Redirect if user doesn't have the right role
    }
  }, [session, status, router, roleRequired]);

  if (status === "loading" || !session) {
    return <p>Loading...</p>; // Show loading state while session is loading
  }

  return children; // Render the protected component if authorized
}

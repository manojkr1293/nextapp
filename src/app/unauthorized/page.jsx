'use client'
export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="unauthorized-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
    <h1 className="text-3xl font-semibold text-red-600 mb-4">Unauthorized Access</h1>
    <p className="text-gray-700 mb-6">You do not have permission to view this page.</p>
    <button
      onClick={() => window.location.href = '/'}
      className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Go to Homepage
    </button>
  </div>
</div>

  );
}

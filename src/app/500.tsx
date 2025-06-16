// src/app/500.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-shifavedaGreen">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-shifavedaBrown underline">
        Back to Home
      </Link>
    </div>
  );
}
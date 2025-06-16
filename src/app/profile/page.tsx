'use client';

import { useAuthStore } from '@/lib/hooks/useAuthStore';

export default function ProfilePage() {
  const { user } = useAuthStore();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-shifavedaGreen">Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}
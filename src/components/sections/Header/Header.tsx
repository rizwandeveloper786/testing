// src/components/sections/Header/Header.tsx
'use client';

import Link from 'next/link';
// import { useCartStore } from '@/lib/hooks/useCartStore';

export default function Header() {
  // const { cart } = useCartStore();
  return (
    <header className="bg-shifavedaGreen text-black p-2 mt-2">
      <nav className="container mx-auto flex justify-between items-center h-7">
        <div className="flex-shrink-0 mx-auto">
          <Link href="/" className="text-2xl font-bold text-black text-center">
            ShifaVeda
          </Link>
        </div>
        {/* <div>Cart ({cart.length})</div> */}
      </nav>
    </header>
  );
}
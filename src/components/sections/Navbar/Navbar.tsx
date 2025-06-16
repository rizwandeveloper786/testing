

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md relative h-22">
      <div className="max-w-8xl mx-auto px-12 py-7 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">ShifaVeda</Link>
        </div>

        

        {/* Icons (always visible) */}
        <ul className="flex items-center gap-5 text-white text-xl ml-4 md:ml-0">
          <li>
            <Link href="/login" className="hover:text-yellow-500">
              <FaUser />
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-yellow-500">
              <FaSearch />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-yellow-500">
              <FaShoppingCart />
            </Link>
          </li>
          {/* Mobile toggle button */}
        <button
          className="md:hidden text-white mt-2 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        </ul>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row gap-6 px-4 md:px-0 py-4 md:py-2 md:items-center md:justify-center bg-green-700 md:bg-transparent transition-all duration-300 ease-in-out z-50 absolute top-0 left-1/3 w- ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        {/* Shop */}
        <li>
          <Link href="/shop" className="flex flex-col items-center justify-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="Shop" width={40} height={40} />
            <p>Shop</p>
          </Link>
        </li>

        {/* All Products with Dropdown */}
        <li className="relative group">
          <Link href="/products" className="flex flex-col items-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="All Products" width={40} height={40} />
            <p>All Products</p>
          </Link>

          <ul className="absolute hidden group-hover:block bg-white text-black w-56 shadow-lg mt-2 rounded z-40">
            {[
              ['skin-care-hair-care', 'Skin Care & Hair Care'],
              ['weight-power', 'Weight & Power'],
              ['daily-intimate', 'Daily Intimate'],
              ['daily-health', 'Daily Health'],
              ['combos', 'Combos'],
              ['best-sellers', 'Best Sellers'],
              ['last-longer', 'Last Longer'],
              ['better-erections', 'Better Erections'],
              ['condoms-lubes', 'Condoms & Lubes'],
              ['perfumes', 'Perfumes'],
            ].map(([slug, label]) => (
              <li key={slug}>
                <Link
                  href={`/products/${slug}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Other nav items */}
        <li>
          <Link href="/category" className="flex flex-col items-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="Category" width={40} height={40} />
            <p>Category</p>
          </Link>
        </li>
        <li>
          <Link href="/combos" className="flex flex-col items-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="Combos" width={40} height={40} />
            <p>Combos</p>
          </Link>
        </li>
        <li>
          <Link href="/best-sellers" className="flex flex-col items-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="Best Sellers" width={40} height={40} />
            <p>Best Sellers</p>
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="flex flex-col items-center gap-1 hover:text-yellow-300">
            <Image src="/images/shop.webp" alt="Blogs" width={40} height={40} />
            <p>Blogs</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

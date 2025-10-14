import React from 'react';

export function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">AddToCartApp</span>
          </div>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Open cart"
          >
            <span>Cart</span>
            <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}




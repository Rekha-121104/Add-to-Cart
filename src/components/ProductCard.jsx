import React from 'react';

export function ProductCard({ product, onAdd }) {
  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex-1">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">{product.title}</h3>
        <p className="mt-2 text-base font-semibold text-indigo-700">${product.price?.toFixed(2)}</p>
      </div>
      <button
        type="button"
        onClick={() => onAdd(product)}
        className="mt-3 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add to Cart
      </button>
    </div>
  );
}




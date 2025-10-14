import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { ProductCard } from './components/ProductCard.jsx';
import { CartModal } from './components/CartModal.jsx';
import { useCart } from './hooks/useCart.js';

export default function App() {
  const { items, addItem, removeItem, total } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    let isActive = true;
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        if (isActive) setProducts(data);
      } catch (e) {
        if (isActive) setError(e.message || 'Unexpected error');
      } finally {
        if (isActive) setLoading(false);
      }
    }
    fetchProducts();
    return () => {
      isActive = false;
    };
  }, []);

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="py-20 text-center text-gray-600">Loading products…</div>
      );
    }
    if (error) {
      return (
        <div className="py-20 text-center text-red-600">{error}</div>
      );
    }
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addItem} />
        ))}
      </div>
    );
  }, [loading, error, products, addItem]);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={items.length} onOpenCart={() => setCartOpen(true)} />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-2xl font-bold">Products</h1>
        {content}
      </main>

      <CartModal
        open={isCartOpen}
        items={items}
        total={total}
        onClose={() => setCartOpen(false)}
        onRemove={removeItem}
      />
    </div>
  );
}




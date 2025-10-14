import { useCallback, useMemo, useState } from 'react';

export function useCart() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((product) => {
    setItems((prev) => {
      const alreadyInCart = prev.some((p) => p.id === product.id);
      if (alreadyInCart) {
        alert('Item already added to the cart.');
        return prev;
      }
      return [...prev, product];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const total = useMemo(() => {
    return items.reduce((sum, p) => sum + (p.price || 0), 0);
  }, [items]);

  return { items, addItem, removeItem, total };
}





import { useEffect, useState } from "react"
import "./App.css"


function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);

      } catch (err) {
        setError(err.message)

      } finally {
        setLoading(false)
      }

    }
    fetchProducts();
  }, [])

  // loading state
  if (loading) {
    return <h1>Please wait products are loading.......</h1>
  }

  if (error) {
    return <h1>sever error</h1>
  }

  return (
    <div className="products-container">
      <h2 className="product-title">Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className = "product-card" key={product.id}>
            <img src={product.image} className="product-image"/>
            <h3 className="product-title">{product.title}</h3>
            <h2 className="product-price">{product.price}</h2>
            <button className="add-to-cart">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )





}

export default App
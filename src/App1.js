import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // runs on every render
  useEffect(() => {
    console.log("component loaded or re-loaded")
  })

  //it will call only once with empty dependency
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => console.log("fetched data is", data))
  }, [])

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      Value is : {count}
      <button onClick={increment}>Increment</button>
    </div>
  )

}

export default App
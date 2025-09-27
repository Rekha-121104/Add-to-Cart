import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  // runs on every render

  // const increment = () => {
  //   setCount(count + 1)
  // }

  useEffect(() => {
    console.log("Count value", count)
  }, [count])

  useEffect(() => {
    console.log("Age: ", age)
  }, [age])


  // useEffect(() => {
  //   if (count > 6) {
  //     alert("Count cannot be greater than 6", count)
  //   }

  // }, [count])

  return (
    <>
      <div>
        <h2> Count: {count}</h2>
        <h3> Age: {age} </h3>
        <button onClick={() => setCount(count + 1)}>count</button>
        <button onClick={() => setAge(age + 1)}>Age</button>
      </div>

    </>
  )

}

export default App
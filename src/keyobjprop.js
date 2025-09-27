

function App() {

  const mobiles = [
    { id: 1, name: "LG", price: 5000 },
    { id: 2, name: "oppo", price: 6000 },
    { id: 3, name: "iphone", price: 7000 },
    { id: 4, name: "iphone", price: 10000 },
  ]

  return (
    <ul>
      {mobiles.map((mobile) => (
        <li key={mobile.id}>
          {mobile.name} -- 
          {mobile.price}

        </li>

      ))}
    </ul>
  )

}

export default App


//key prop is the special prop used when we render the list of elements in react
//it is going to identify which items have changed, updated, deleted. which decrease the load of the DOM and increase performance of the application



function App() {

  const mobiles = ["lg", "oppo", "vivo", "samsung", "iphone"];

  return (
    <ul>
      {mobiles.map((mobile, index) => (
        <li key={index}>{mobile}</li>

      ))}
    </ul>
  )
  
}

export default App


//key prop is the special prop used when we render the list of elements in react
//it is going to identify which items have changed, updated, deleted. which decrease the load of the DOM and increase performance of the application

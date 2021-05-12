import React, { useState, useEffect} from "react";

// import styles
import Nav from './Layout/Nav.js'

function App() {
  const [ name, setName ] = useState("");
  useEffect( () => {
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
  .then((response) => response.json())
  .then((data) => setName(data)
  )
  }, [] )
  return (
    <div className="App">
    <Nav />
    <div className="container">
      <p> {name.date} </p>
    </div>
    </div>
  );
}

export default App;

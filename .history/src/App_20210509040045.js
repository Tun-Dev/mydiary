import React, { useState, useEffect} from "react";
import './App.css';

function App() {
  const [ name, setName ] = useState("");
  useEffect( () => {
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
  .then((response) => response.json())
  .then((data) => setName(data)
  )
  }, [] )

 console.log(name);
  return (
    <div className="App">
    <div className="container">
      <p> {name.date} </p>
    </div>
    </div>
  );
}

export default App;

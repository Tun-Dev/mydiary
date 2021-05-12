import React, { useState, useEffect} from "react";
import GlobalStyle from './GlobalStyle'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
  const [ name, setName ] = useState("");
  const [isPending, setIsPending] = useState(true)
  useEffect( () => {
    fetch("http://localhost:8000/drafts")
  .then((response) => response.json())
  .then((data) => 
  setName(data)
  )
  }, [] )
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
    <p>{name.title}</p>
      <DiaryHome name={name}/>
    </div>
    </div>
  );
}

export default App;

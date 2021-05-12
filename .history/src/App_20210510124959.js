import React, { useState, useEffect} from "react";
import GlobalStyle from './GlobalStyle'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
  const [ name, setName ] = useState("");
  useEffect( () => {
    fetch("")
  .then((response) => response.json())
  .then((data) => setName(data)
  )
  }, [] )
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
      <DiaryHome />
    </div>
    </div>
  );
}

export default App;

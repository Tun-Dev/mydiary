import React from "react";
import GlobalStyle from './GlobalStyle';
import useFetch from './useFetch'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
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

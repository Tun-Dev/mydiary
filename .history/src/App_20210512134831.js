import React from "react";
import GlobalStyle from './GlobalStyle';

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'
import About from './Components/About';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
    <DiaryHome />
    <About />
    </div>
    </div>
  );
}

export default App;

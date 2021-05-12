import React from "react";
import GlobalStyle from './GlobalStyle';
import useFetch from './useFetch'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
 const {diaries, isPending, error} = useFetch("http://localhost:8000/drafts")
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
    {error && <div> {error} </div>}
    {isPending && <div>Loading... </div>}
     {diaries && <DiaryHome diaries={diaries}/>}
    </div>
    </div>
  );
}

export default App;

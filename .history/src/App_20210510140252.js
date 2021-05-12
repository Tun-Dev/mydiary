import React, { useState, useEffect} from "react";
import GlobalStyle from './GlobalStyle'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
  const [ diaries, setDiaries ] = useState("null");
  const [isPending, setIsPending] = useState(true)
  
  useEffect( () => {
    fetch("http://localhost:8000/drafts")
  .then((response) =>{ response.json()
  })
  .then(data => {
  setDiaries(data);
  setIsPending(false);
  })
  }, [] )
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
    {isPending && <div>Loading... </div>}
     {diaries && <DiaryHome diaries={diaries}/>}
    </div>
    </div>
  );
}

export default App;

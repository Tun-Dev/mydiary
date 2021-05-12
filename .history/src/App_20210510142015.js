import React, { useState, useEffect} from "react";
import GlobalStyle from './GlobalStyle'

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'

function App() {
  const [ diaries, setDiaries ] = useState("null");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect( () => {
    fetch("http://localhost:8000/drafts")
  .then((response) =>{ 
    if(!response.ok) {
      throw Error('Could not fetch data for that resource please try again.')
    }
    response.json()
  })
  .then((data) => {
  setDiaries(data);
  setIsPending(false);
  setError(null);
  })
  .catch((err) =>{
    setIsPending(false);
    setError(err.message)
  }) 
  }, [] )
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

import {useState, useEffect} from 'react';

 const useFetch = (url) => {
     const [ diaries, setDiaries ] = useState("null");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect( () => {
    fetch(url)
  .then(response =>{ 
    if(!response.ok) {
      throw Error('Could not fetch data for that resource please try again.')
    }
    response.json()
  })
  .then(data => {
  setDiaries(data);
  setIsPending(false);
  setError(null);
  })
  .catch(err =>{
    setIsPending(false);
    setError(err.message)
  }) 
  }, [url] )

  return {diaries, isPending, error }
}

export default useFetch;
import React from 'react';
import useFetch from '../useFetch';
import Diary from './Diary';

const DiaryHome = () => {
  const {diaries, isPending, error} = useFetch("http://localhost:8000/drafts")
    return (
        <div>
         {error && <div> {error} </div>}
         {isPending && <div>Loading... </div>}
          {diaries && <Diary diaries={diaries} /> }
        </div>
    )
}

export default DiaryHome

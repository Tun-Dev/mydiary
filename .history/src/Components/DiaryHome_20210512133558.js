import React from 'react';
import useFetch from '../useFetch';
import Diary from './Diary';

const DiaryHome = () => {
  let {diaries, isPending, error} = useFetch('http://localhost:8000/drafts');
  diaries = Array.from(diaries);
    return (
        <div>
         {error && <div> {error} </div>}
         {isPending && <div>Loading... </div>}
          {diaries && {diaries}.map((diary) => (<Diary  key={diary.id} />))}
        </div>
    )
}

export default DiaryHome

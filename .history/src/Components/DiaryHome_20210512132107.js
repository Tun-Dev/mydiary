import React from 'react';
import useFetch from '../useFetch';
import Diary from './Diary';

const DiaryHome = () => {
  const {diaries, isPending, error} = useFetch('http://localhost:8000/drafts');
    return (
        <div>
         {error && <div> {error} </div>}
         {isPending && <div>Loading... </div>}
          {diaries && {diaries}.map((diary) => (<Diary  key={diary.id} />))}
        </div>
    )
}

export default DiaryHome

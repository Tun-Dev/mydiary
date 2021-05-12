import React from 'react';

const Diary = ({diaries}) => {
    diaries = Array.from(diaries);
    return (
        <div>
            {diaries.map((diary) => (
              <div  key={diary.id}>
                <h2 className="diaryTitle">{diary.title}</h2>
                <p className="diaryDate">{diary.date}</p>
              </div>
              
          ))}  
        </div>
    )
}

export default Diary

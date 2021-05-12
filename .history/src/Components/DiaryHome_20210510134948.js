import React from 'react';

const DiaryHome = ({diaries}) => {
    return (
        <div>
          {diaries.map((diary) => (
              <div  key={diary.id}>
                <h2 className="diaryTitle">{diary.title}</h2>
                <p className="diarydate">{diary.date}</p>
              </div>
              
          ))} 
        </div>
    )
}

export default DiaryHome

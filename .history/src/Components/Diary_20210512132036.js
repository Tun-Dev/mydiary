import React from 'react';

const Diary = ({diary}) => {
    // diaries = Array.from(diaries);
    return (
        <div>
              <div>
                <h2 className="diaryTitle">{diary.title}</h2>
                <p className="diaryDate">{diary.date}</p>
              </div> 
        </div>
    )
}

export default Diary

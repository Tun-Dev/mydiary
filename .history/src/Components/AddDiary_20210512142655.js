import React, {useState} from 'react';
import styled from 'styled-components';

const AddDiary = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <form>
              <div className="container">
              <p>Please write your story.</p>
              

              <label><b>Title</b></label>
               <input type="text" placeholder="Type" value={title} required />
               <label><b>Date</b></label>
               <input type="date" value={date} required />
               <label>Your Story: <textarea value={message}  ></textarea></label>
               </div>
            </form>
        </div>
    )
}

export default AddDiary

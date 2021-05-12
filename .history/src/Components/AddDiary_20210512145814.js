import React, {useState} from 'react';
import styled from 'styled-components';

const AddDiary = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Add>
            <form>
              <div className="container">
                <div>
                 <p>Please write your story.</p>
                </div>
              
              <div>
               <label><b>Title</b></label>
               <input type="text" placeholder="Type" value={title} required />
              </div>
              <div>
               <label><b>Date</b></label>
               <input type="date" value={date} required />
              </div>
              <div>
              <label>Your Story: <textarea value={message} col="50" row="30" ></textarea></label>
              </div>

              <div className="addButton">
              <button className="btn">Add Story</button>
              </div>

              

               </div>
            </form>
        </Add>
    )
}
const Add = styled.div`
input[type=text], input[type=date], textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;


input[type=text]:focus, input[type=date]:focus {
  background-color: #ddd;
  outline: none;
}
.addButton {
    text-align: center;
    width: 40vw;
}
button {
  background-color: #591c0b;
  color: #dce1e3;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity:1;
`
export default AddDiary;

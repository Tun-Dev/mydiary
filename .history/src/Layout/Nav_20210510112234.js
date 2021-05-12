import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <navBar>
         <div className="header">
           Diaries
         </div>
         <ul className="navItens">
           <li><Link to="">Add Diary</Link></li>
           <li><Link to="">About</Link></li>
         </ul>
        </navBar>
    )
}
const navBar = styled.div`
  display: flex;
 justify-content: space-between;
 background-color: #591c0b;
`

export default Nav;
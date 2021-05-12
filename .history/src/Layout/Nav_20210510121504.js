import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <NavBar>
          <nav>
         <div className="header">
           Diaries
         </div>
         <ul className="navItens">
           <li><Link to="">Add Diary</Link></li>
           <li><Link to="">About</Link></li>
         </ul>
          </nav>
        </NavBar>
    )
}
const NavBar = styled.div`
     background-color: #591c0b;
     height: 6vh;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;

}
ul {
    display: flex;
}
ul li {
    list-style: none;
    margin: 0 0.8rem;
}
`;

export default Nav;
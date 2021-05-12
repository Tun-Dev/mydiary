import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <NavBar>
          <nav>
         <div className="header">
           <Link to="/">Diaries</Link>
         </div>
         <ul className="navItens">
           <li><Link to="">Add Diary</Link></li>
           <li><Link to="/About">About</Link></li>
         </ul>
          </nav>
        </NavBar>
    )
}
const NavBar = styled.div`
     
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #591c0b;
    height: 10vh;
    color: #dce1e3;
}
.header {
    margin: 0 2rem;
    font-size: 2rem;
     color: #dce1e3;
}
.header a {
  color: #dce1e3;
}
ul {
    display: flex;
    margin: 0 2rem;
}
ul li {
    list-style: none;
    margin: 0 0.8rem;
}
ul li a {
    color: #dce1e3;
    font-size: 1.6rem;
}
`;

export default Nav;
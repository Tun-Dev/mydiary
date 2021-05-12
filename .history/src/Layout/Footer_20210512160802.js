import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
            copyright 2021 by Niles
        </Foot>
    )
}
const Foot = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color:  #591c0b;
height: 6vh;
color: #dce1e3;
font-size: 1.4rem;
font-family: 'Montserrat', sans-serif;
font-weight: 100;
pointer: cursor;
`
export default Footer

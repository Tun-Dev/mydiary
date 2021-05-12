import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutStyle>
        <div className="about__content">
          <h2 className="about__contentText">
           This is an online safe space for your documentation about events that happened to you
          </h2>
        </div>
            
        </AboutStyle>
    )
}
const AboutStyle = styled.div`
 .about__content {
     text-align: center;
 }
 .about__contentText {
     font-size: 2.5rem;
     color: #1de1de;
 }
`

export default About

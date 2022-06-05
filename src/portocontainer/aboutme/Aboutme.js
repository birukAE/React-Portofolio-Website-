import React from 'react'
import styled from 'styled-components'
import IMG from '../../assets/home/photo.jpg'
import "../home/profile.css"
import { Marginer } from '../testemonial/Marginer'

const Container= styled.div`
margin-top:10px;
display:flex;
align-items:center;
justifiy-content:center;
height:800px;
width:100%;
display:flex;
flex-direction:column;
margin-top:70px;
@media only screen and (max-width: 780px) {
  display:flex;
    flex-direction: column;
    height:1100px;
  }

`;
const Img= styled.img`

width:400px;
height:100%;


`;
const Aboutmebox= styled.div`
display:flex;
align-items:center;
justifiy-content:center;
width:800px;
height:480px;
margin-right:10px;
box-shadow: 3px 3px 6px 3px rgba(19, 20, 19, 0.2);
@media only screen and (max-width: 780px) {
  display:flex;
    flex-direction: column;
    box-shadow:none;

  }
`;
const Header= styled.h3`
display:flex;
align-items:center;
justifiy-content:center;
color: (--white);
font-family: 'RobotoMono Regular';


`;
const Note= styled.div`
padding:3px;

justifiy-content:center;
align-text:center;
width:400px;
height:480px;
background-color:whitesmoke;
overflow-wrap: break-word;
box-shadow:   3px 3px 6px 3px rgba(19, 20, 19, 0.2);
`;
const Note2= styled.ul`

list-type: dot ;
overflow-wrap: break-word;

`;
const Notelower= styled.p`
color:black;
font-family: 'RobotoMono Regular';
`;
const HorizontalRule = styled.hr`
width: 20%;
padding:0px;
margin:0px;
color: white;
border: orange solid 2px;

`;
function Aboutme() {
  return (
    <Container  id='about'><Header>About me </Header> <Marginer direction="vertical" margin="0.5px" />
    <HorizontalRule />
    
    <Notelower>why it should be me</Notelower><Aboutmebox>
<Img src={IMG} />
<Note>
Full-stack developer with a background knowledege 
of JavaScript, Reactjs, HTML,CSS etc.And ofcourse,experinced
with full-stack MERN applications with APIS and databasese like MYSQL.
Strong candidate with Bsc in computer enginnering and different certeficates for react/redux and databasa adminstration
with higher willingness to do all my best for the orgnaization.

<Note2>
  <h4>Hear are afew highlights</h4>
 <li>Intractive front-end designer</li>
 <li>Full-stack web development</li>
 <li>Grate database managment</li>
 <li>Redux/Context-api State Managment</li>
 <li>Building Rest APIS</li>
 <li>Reactjs/react-Bootstrap</li>

</Note2>
<div className="profile-options">
              
              <button className="btn primary-btn">
                  {" "}Hire me{" "}
              </button>
              <a href="ehizcv.pdf" download="biruk ehizcv.pdf">
              <button className="btn highlighted-btn">Get resume</button></a>
              </div>
</Note>

</Aboutmebox>
</Container>
  )
}

export default Aboutme
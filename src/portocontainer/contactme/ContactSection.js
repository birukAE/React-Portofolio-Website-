import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import { Marginer } from '../testemonial/Marginer';



const HorizontalRule = styled.hr`
width: 20%;
padding:0px;
margin:0px;
color: orange;
border: orange solid 2px;

`;
const ContactSectionStyle = styled.div`
  padding-bottom: 1rem ;
  display:flex;
  justify-content;center;
  flex-direction:column;
  margin-left:200px;
  align-items:center;
  @media only screen and (max-width: 768px) {
    width:100%;
      margin-left:-5px;;
    
    }
  .contactSection__wrapper {
    display: flex;
   
    margin-top: 1rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: orange;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    align-items:center;
    justify-content:center;
    

  }
  .right {
    max-width: 500px;
    width: 100%;
  
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;
const Head = styled.div`    
align-items:center;
justifiy-content:center;
display:flex;

flex-direction:column;
color:black;
font-family: 'RobotoMono Regular';
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle id="contact">
      <div className="container">
      <Head><h2>Contact</h2>
      <Marginer direction="vertical" margin="0.2em" />
        <HorizontalRule />
        <Marginer direction="vertical" margin="0.1em" />
      <p> Get in touch </p></Head>
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone size={45}/>} text="+251938297666" />
            <ContactInfoItem icon={<MdEmail size={45}/>} text="broookemiru@gmail.com" />
            <ContactInfoItem text="Adiss abeba, Ethiopia" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
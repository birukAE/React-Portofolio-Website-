import React, { useRef, useState ,useEffect} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { AiFillThunderbolt,FaTimes } from 'react-icons/fa';

import { GiCrystalBars } from 'react-icons/gi';
import { FiCheckCircle} from 'react-icons/fi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {RiSendPlaneFill}from 'react-icons/ri';
import './Contact.css'






const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const MESSAGE_REGEX =/^[a-zA-Z0-9-_@!%$# ]{6,1000}$/;
const EMAIL_REGEX =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;

const Thanks = styled.h2`
background-color:black;
`;
const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 0.1rem;
  }
  label {
    font-size: 1rem;
    
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    color: white;
    background-color:black;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 0.1rem;
  }
  textarea {
    min-height: 200px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: orange;
    color: white;
    display: inline-block;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    padding: 10px 22px;
    
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      
      background-color: #111;
      text-decoration:none;
    }
  
&:active{
  background-color:red;
}
&:hover{
  background-color:black;
  transition: all 0.2s ease-in-out;
}}

`;

export default function Contactme() {
  const form = useRef();
    

    const[name,setName]=useState("");
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const[email,setEmail]=useState("");
    const [validEmail, setValidemail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [message, setMessage] = useState('');
    const [validMessage, setValidMessage] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);
    const [succes, setSucces] = useState('');
    
    

  useEffect(() => {
      setValidName(USER_REGEX.test(name));
  }, [name])

  useEffect(() => {
    setValidMessage(MESSAGE_REGEX.test(message));
}, [message])
useEffect(() => {
  setValidemail(EMAIL_REGEX.test(email));
}, [email])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ldoj1o9', 'template_mhi2cd8',form.current,'NWmkZDj4wQrwmVgv6')
      .then((result) => {
          console.log(result.text);
          setSucces(alert("thanks for contacting Biruk"))
      }, (error) => {
          console.log(error.text);
      
      });
      setName("");
      setMessage("");
      setEmail("");
      
  };

 
  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <div className="form-group">

          <label htmlFor="name">
            Your Name
            <span className={validName ? "valid" : "hide"} > <FiCheckCircle/></span>
               <span className={validName || !name ? "hide" : "invalid"} ><AiOutlineCloseCircle /></span>
            <input

             placeholder='type yor Name'
              type="text"
              id="name"
              name="name"
              value={name}
                 autoComplete="off"
                 onChange={(event)=>setName(event.target.value)}
                 required
                 aria-invalid={validName ? "false" : "true"}
                 aria-describedby="namenote"
                 onFocus={() => setNameFocus(true)}
                 onBlur={() => setNameFocus(false)}  
                       />
            <p id="namenote" className={nameFocus && name && !validName ? "instructions" : "offscreen"} >
                 <GiCrystalBars />
                  Must begin with a letter.<br />
                   special characters are not allowed.<br />
                                    </p>    
             
       
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <span className={validEmail ? "valid" : "hide"} > <FiCheckCircle /></span>
               <span className={validEmail || !email ? "hide" : "invalid"} ><AiOutlineCloseCircle /></span>
            

            <input
             placeholder='type your email'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
      
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}  
            />
             <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"} >
                 <GiCrystalBars />
                
                  Must be an email format .<br />
                   must include special character"@".
                                    </p>    
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <span className={validMessage ? "valid" : "hide"} > <FiCheckCircle /></span>
               <span className={validMessage || !message ? "hide" : "invalid"} ><AiOutlineCloseCircle /></span>
            
            <textarea
              type="text"
              placeholder='type yor message'
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-invalid={validMessage ? "false" : "true"}
              aria-describedby="msgnote"
              onFocus={() => setMessageFocus(true)}
              onBlur={() => setMessageFocus(false)}  
            /><p id="msgnote" className={messageFocus && message && !validMessage ? "instructions" : "offscreen"} >
            <GiCrystalBars />
            only up to 1000 characters.<br />
 Letters, numbers, underscores, hyphens allowed.
                               </p>    
          </label>
        </div>
        <button disabled={!validName||!validMessage |!validEmail? true : false}type="submit">Send <RiSendPlaneFill /></button>
      </FormStyle>
    </>
  );
}
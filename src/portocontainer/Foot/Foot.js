
import React from "react";
import styled from "styled-components";
import {Marginer}  from "../testemonial/Marginer";
import { FaAffiliatetheme, FaMagento } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';



const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  position: relative;
`;
 const NavLogo = styled(Link)`
  color: orange;
  justify-content:center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  `;
 

  


 

const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

 const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  align-items: center;
  color:white;
    `;

 const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color:white;
`;

 const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

 const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid white;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
   
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
  
`;

const SocialContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: 960px) {
      width: 100px;
     padding-bottom: 25px;
  }
`;

 const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  width: 200px;
  @media screen and (max-width: 960px) {
    width: 250%;
      display: flex;
      justify-content: space-between;
  }
`;

 const SocialIconLink = styled.a`
  color: orange;
  font-size: 24px;
  &:hover {
    color: white;
  }
  @media screen and (max-width: 960px) {
    
      font-size: 15px;
      
  }
`;




const Link1 = styled(Link)`
color: orange;
cursor: pointer;
font-size: 14px;
&:not(:last-of-type) {
 margin-right: 11px;
    }
 &:hover {
 color:white;
 text-decoration:none;
    }
  

  @media screen and (max-width: 960px) {
    font-size: 11px;
   
}

`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
 @media screen and (max-width: 960px) {
    font-size: 9px;
   
}
`;
export const Button = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? 'black' : 'orange')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #111;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? 'black' : 'white')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;




export function Foot(props) {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
      <Marginer direction="vertical" margin="0.5em" />
             <NavLogo to ='/'> BKweb
            </NavLogo>
      <Marginer direction="vertical" margin="1em" />
     
        Subscribe for latest updates!
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <Marginer direction="vertical" margin="0.5em" />
      <Button>Contact me</Button>
      <Marginer direction="vertical" margin="4.5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link1 to="/">Privacy Policy</Link1>
          <Link1  to="/"> Terms of Service</Link1>
          <Link1 to="/">Contact</Link1>
        </PrivacyContainer>
        <SocialContainer>
        <SocialIcons>
            <SocialIconLink href=' https://www.facebook.com/profile.php?id=100009504026343' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href=' https://instagram.com/liyu_collections' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UC22stZNfarPKlCQg4jPlNmQ'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/emiru_biruk?t=coCy3nlVZ2F9KV-mqtoFEA&s=09' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/biruk-emiru-4114a7223' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
      </SocialContainer>
          
        
      </AccessibilityContainer>
      <RightsReserved>&copy; 2022 BKweb All rights reserved</RightsReserved>
    </FooterContainer>
  );
}


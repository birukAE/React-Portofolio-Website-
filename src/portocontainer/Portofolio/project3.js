import React from 'react';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

import IMG2 from "../../assets/home/Screenshot8.png"

import { Marginer } from '../testemonial/Marginer';

const PricingSection = styled.div`
  padding: 20px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:40px;
  margin-bottom:10px;
  margin:45px 0 15px;
`;

 const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Button = styled.button`
  color: #111;
  font-size: 13px;
  background-color:orange;
  border-radius:8px;
  &:hover{
    background-color:white;
  }
`;


 const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const PricingCard3 = styled.div`
background-color:black; border: 2.5px orange solid;
text-align:center;background-repeat:no-repeat;width:600px;height:450px;background-size: 100% 70%;
background-image:url(${IMG2});
  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

 const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  color: #fff;
  margin-top:185px;
`;

 const PricingCardIcon = styled.div`
  margin: 5px 0;
`;

 const PricingCardPlan = styled.h2`
  margin-bottom: 20px;
  font-size: 15px;
margin-top:170px;
  color:orange;
`;

 
 const PricingCardFeatures = styled.div`
 font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;


`;
 
const Head = styled.div`    
align-items:center;
justifiy-content:center;
display:flex;
flex-direction:column;
color:black;
font-family: 'RobotoMono Regular';
padding:0px;
margin:0px;
`;

const HorizontalRule = styled.hr`
width: 30%;
padding:0px;
margin:0px;
color: orange;
border: orange solid 2px;

`;

 export function Project3() {
  return ( 
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}   >
      <PricingSection id='resume'>
        <Head><h2>Portofolio Website</h2>
        <Marginer direction="vertical" margin="0.2em" />
        <HorizontalRule />
        <Marginer direction="vertical" margin="1em" />
     </Head>
        <PricingWrapper>
          
          <PricingContainer>
            <PricingCard3>
              <PricingCardInfo>
                 <PricingCardFeatures>
                 <PricingCardPlan>Languages And Skills: Reactjs, Html, Css, Styled-components</PricingCardPlan>
                 <a href='https://github.com/birukAE' target='_blank'>
              <i className="fa fa-github-square" color='orange'></i>
            </a>
                </PricingCardFeatures>
            
              </PricingCardInfo>
            </PricingCard3>
           
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Project3;

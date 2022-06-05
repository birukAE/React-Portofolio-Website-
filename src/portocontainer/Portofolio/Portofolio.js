import React from 'react';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import IMG from "../../assets/home/Screenshot5.png"
import IMG1 from "../../assets/home/Screenshot8.png"
import IMG2 from "../../assets/home/Screenshot2.png"
import IMG3 from "../../assets/home/Screenshot9.png"
import IMG4 from "../../assets/home/Screenshot4.png"
import IMG5 from "../../assets/home/Screenshot6.png"
import { Marginer } from '../testemonial/Marginer';
import { Link } from 'react-router-dom';
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

 const PricingCard = styled(Link)`
 
  background-color:black;

 background-repeat:no-repeat;
 background-size: 100% 70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width:  300px;
  height: 280px;
  text-decoration: none;
  border-radius: 10px;
  border: 2.5px orange solid;
  margin-left: 15px;
background-image:url(${IMG});
  &:nth-child(2) {
    margin: 15px;
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
const PricingCard1 = styled(Link)`
background-color:black; border: 2.5px orange solid;
text-align:center;background-repeat:no-repeat;width:300px;height:280px;background-size: 100% 70%;
background-image:url(${IMG1});
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
const PricingCard2 = styled(Link)`
background-color:black;
 background-repeat:no-repeat; border: 2.5px orange solid;
 background-size: 100%  70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 280px;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 15px;
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
const PricingCard3 = styled(Link)`

 background-repeat:no-repeat;
 background-color:black; border: 2.5px orange solid;
 background-size: 100% 70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 280px;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 15px;
background-image:url(${IMG3});
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
const PricingCard4 = styled(Link)`
background-color:black;
 background-repeat:no-repeat; border: 2.5px orange solid;
 background-size: 100% 70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px; border: 2.5px orange solid;
  height: 280px;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 15px;
background-image:url(${IMG4});
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
const PricingCard5 = styled(Link)`
background-color:black;
 background-repeat:no-repeat;
 background-size: 100% 70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 280px;
  text-decoration: none; border: 2.5px orange solid;
  border-radius: 10px;
  margin-left: 15px;
background-image:url(${IMG5});
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
  font-size: 13px;
margin-top:25px;
  color:orange;
`;

 const PricingCardCost = styled.h4`
  font-size: 15px;
`;

 const PricingCardLength = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`;

 const PricingCardFeatures = styled.ul`
 
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  color: white;

`;
 const PricingCardFeature = styled.li`
  margin-bottom: 10px;
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
width: 20%;
padding:0px;
margin:0px;
color: orange;
border: orange solid 2px;

`;

 export function Portofolio() {
  return ( 
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}   >
      <PricingSection id='resume'>
        <Head><h2>Resume</h2>
        <Marginer direction="vertical" margin="0.2em" />
        <HorizontalRule />
        <Marginer direction="vertical" margin="0.1em" />
      <p> projets i have made sofar </p></Head>
        <PricingWrapper>
          
          <PricingContainer>
            <PricingCard to='/project3'>
              <PricingCardInfo>
                 <PricingCardFeatures>
                 <PricingCardPlan>MERN Job-search App</PricingCardPlan>
                  <Button to='/project3'>Show more</Button>
                </PricingCardFeatures>
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard1 to='/project1'>
              <PricingCardInfo>
                
               
               
                <PricingCardFeatures>
                  <PricingCardPlan>Scholarship-conector App</PricingCardPlan>
                  <Button to='/project1'>Show more</Button>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard1>
            <PricingCard2 to='/project2'>
              <PricingCardInfo>
                <PricingCardFeatures>
                <PricingCardPlan>Full-stack E-learning app</PricingCardPlan>
               <Button to='/project2'>Show more</Button>
                </PricingCardFeatures>
                
              </PricingCardInfo>
            </PricingCard2>
          </PricingContainer>
          <PricingContainer>
            <PricingCard3 to='/project3'>
              <PricingCardInfo>
                
              
            
                <PricingCardFeatures>
                   <PricingCardPlan>Reactjs-portofolio </PricingCardPlan>
               <Button  to='/project3'>Show more</Button>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard3>
            <PricingCard4 to='/project4'>
              <PricingCardInfo>
              <PricingCardFeatures>
              <PricingCardPlan>Full-stack E-learning app</PricingCardPlan>
                  
                   <Button to='/project4'>Show more</Button>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard4>
            <PricingCard5 to='/project2'>
              <PricingCardInfo>
              <PricingCardFeatures>
                <PricingCardPlan>Full-stack E-learning app</PricingCardPlan>
                 
                <Button to='/project2'>Show more</Button>
                </PricingCardFeatures>
                
              </PricingCardInfo>
            </PricingCard5>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Portofolio;

import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { ImDatabase } from 'react-icons/im';
import { SiJavascript} from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import Img from "../../assets/home/bg.jpg"
import styled from 'styled-components';
import Footer from "../../portocontainer/home/footer/footer";
import { Marginer } from '../testemonial/Marginer';
const Button= styled.button`
background-color:orange;
color:balck;
border-radius:8px;
&:hover{
 background-color:white;
}
`
const PricingSection = styled.div`
  padding: 0px 0 10px;
  display: flex;
  height: 480px;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Img});
  min-height: fit-content;
  @media screen and (max-width: 960px) {
    display: flex;
    width: 100%;
  height:1480px;
  flex-direction: column;
  
  }
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
const PricingHeading = styled.h1`
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
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
  padding-top:22px;
  }
`;

export const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 330px;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 15px;
margin-bottom:15px;
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
  
`;

 const PricingCardIcon = styled.h3`
  margin: 5px 0;

`;

 const PricingCardPlan = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const PricingCardFeatures = styled.div`
 
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  color: white;
  margin-bottom:10px;

`;

 const PricingCardLength = styled.p`
  font-size: 15px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

 const  PricingCardCost  = styled.div`
 
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
background-color:white;
font-family: 'RobotoMono Regular';
`;

const HorizontalRule = styled.hr`
width: 20%;
padding:0px;
margin:0px;
color: orange;
border: orange solid 2px;

`;
 export function Services() {
  return (
      
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }} >
       
      <PricingSection id="services"> <Head><h2>Services</h2>
      <Marginer direction="vertical" margin="0.1em" />
        <HorizontalRule />
       
      <p>What we provide</p></Head>
        <PricingWrapper>
          
          <PricingContainer>
          <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardCost>
              <PricingCardFeatures>
                <PricingCardIcon>
                  <SiReact color="orange" />
                </PricingCardIcon>
                <PricingHeading>Front-end Development</PricingHeading>
                <PricingCardPlan>Reactjs. Apps</PricingCardPlan>
                <PricingCardPlan>Html,Css & javaScript Web</PricingCardPlan>
                <PricingCardPlan>Wordprees Website</PricingCardPlan>
                <PricingCardPlan>front-end Design</PricingCardPlan>
                <PricingCardPlan>UI/UX</PricingCardPlan>
                <PricingCardPlan>React/Redux</PricingCardPlan>
                </PricingCardFeatures>
              <Button >Order now</Button>
              </ PricingCardCost >
               </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
            <PricingCardInfo>
              <PricingCardCost>
              <PricingCardFeatures>
                <PricingCardIcon>
                  <CgWebsite color="orange" />
                </PricingCardIcon>
                <PricingHeading>Full-stack Web Development</PricingHeading>
                <PricingCardPlan>UI/UX</PricingCardPlan>
                <PricingCardPlan>Back-end  Development</PricingCardPlan>
                <PricingCardPlan>Reactjs/Nodejs Appa</PricingCardPlan>
                <PricingCardPlan>Expressjs Back-end</PricingCardPlan>
                <PricingCardPlan>MYSQL-Database</PricingCardPlan>
                <PricingCardPlan>Database Managment</PricingCardPlan>
                </PricingCardFeatures>
              <Button >Order now</Button>
              </ PricingCardCost >
               </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardCost>
              <PricingCardFeatures>
                <PricingCardIcon>
                  <ImDatabase color="orange" />
                </PricingCardIcon>
                <PricingHeading>Database Managment</PricingHeading>
                <PricingCardPlan>Building Databases</PricingCardPlan>
                <PricingCardPlan>Managing Database</PricingCardPlan>
                <PricingCardPlan>Relational Databases</PricingCardPlan>
                <PricingCardPlan>Database Modeling</PricingCardPlan>
                <PricingCardPlan>MYSQL-Database</PricingCardPlan>
                <PricingCardPlan>Mongodb Database</PricingCardPlan>
                </PricingCardFeatures>
              <Button >Order now</Button>
              </ PricingCardCost >
               </PricingCardInfo>
               
            </PricingCard>
            <PricingCard to='/sign-up'>
            <PricingCardInfo>
              <PricingCardCost>
              <PricingCardFeatures>
                <PricingCardIcon>
                  <SiJavascript color="orange" />
                </PricingCardIcon>
                <PricingHeading>MERN App Development</PricingHeading>
                <PricingCardPlan>Full-stack App</PricingCardPlan>
                <PricingCardPlan>Back-end  Development</PricingCardPlan>
                <PricingCardPlan>Reactjs/Nodejs Appa</PricingCardPlan>
                <PricingCardPlan>Expressjs Back-end</PricingCardPlan>
                <PricingCardPlan>MYSQL-Database</PricingCardPlan>
                <PricingCardPlan>Database Managment</PricingCardPlan>
                </PricingCardFeatures>
              <Button >Order now</Button>
              </ PricingCardCost >
               </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection> <Footer /> 
    </IconContext.Provider>
  );
}
export default Services;

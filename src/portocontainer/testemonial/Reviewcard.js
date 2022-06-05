
import React from "react";
import styled from "styled-components";
import { Marginer } from "./Marginer";
  import {  RiDoubleQuotesL } from 'react-icons/ri';

const CardContainer = styled.div`
  width: 350px;
  height: 300px;
  background-color:white;
  box-shadow:  7px 7px 8px 8px rgba(100, 90, 90, 0.6);
  border-radius: 1px;
  margin: 1px 0;

  position: relative;
  padding: 1px 1.2em;
  @media screen and (max-width: 780px) {
   
    box-shadow:  7px 7px 8px 8px rgba(100, 90, 90, 0.6);
  }
  
  
`;



const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 780px) {
  font-size:8px;
  margin-top:-8em;
  margin-left:-15px;
  margin-right:-15px;
  
  }

`;
const Color = styled.div`
  color: orange;
margin-top:10px;
@media screen and (max-width: 780px) {
   
  margin:-2px 0px 2px -12px;
  
   
  }
  
`;
const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: orange;
  display: flex;
  
  @media screen and (max-width: 780px) {
   
    margin-top:-2.2em;
    }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
   
    margin-top:-0.5em;
    }
`;

const UserImg = styled.img`
  width: 45px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  @media screen and (max-width: 780px) {
    width: 25px;
    height: 20px;
    margin-top:0px;
    }
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
  @media screen and (max-width: 780px) {
    font-size: 5px;
  
    }
`;

 export function Reviewcard(props) {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
     <Color> <RiDoubleQuotesL size={30}/></Color>
      <Marginer direction="vertical" margin="3.5em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="1.5em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}

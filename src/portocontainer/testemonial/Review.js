
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {Marginer}  from "./Marginer";
import { Reviewcard } from "./Reviewcard";
import { SectionTitle } from "./SectionTitle"
import IMG1 from "../../assets/home/profile1.jpg"
import IMG2 from "../../assets/home/profile2.jpg"
import IMG3 from "../../assets/home/profile4.jpg"
import IMG4 from "../../assets/home/bk.jpg"
import IMG from "../../assets/home/bg.jpg";
import Footer from "../../portocontainer/home/footer/footer";
import "pure-react-carousel/dist/react-carousel.es.css";
import {useMediaQuery}  from 'react-responsive';

const Container = styled.div`
  margin-top:50px;
 display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewsContainer = styled(Element)`
height: 375px;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${IMG});
@media screen and (max-width: 780px) {
  height:100%;
  
}
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 60%;
  @media screen and (max-width: 780px) {
    width: 55%;
  
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  } 
 
`;

const StyledDotGroup = styled(DotGroup)`
margin-top:0px;
display: flex;
justify-content: center;
button {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #cc9898;
  border: none;
  outline: none;
  &:not(:last-of-type) {
    margin-right: 3px;
  }
}

.carousel__dot--selected {
  background-color: orange;
}
@media screen and (max-width: 780px) {
  width: 100%;
 margin-top:10px; 
 
  
}
`;
  

 
const Header = styled.h2`    
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

export function Review(props) {
 
  return (<><Container id="testimonial">
    <Header>Testimonial </Header>
    <Marginer direction="vertical" margin="0.2em" />
    <HorizontalRule />
    <Marginer direction="vertical" margin="0.1em" />
  <SectionTitle>What others are saying about us</SectionTitle>
    <ReviewsContainer>
         
      
      <Marginer direction="vertical" margin="2em" />
      <StyledCarouselProvider
        naturalSlideWidth={170}
        naturalSlideHeight={ 135}
        totalSlides={4}
        visibleSlides={2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <Reviewcard
              reviewText="I very gratfull for working with Biruk, he is very charming and hard worker just with a very good team spirate."
              username="Biniyam mengistu"
              userImgUrl={IMG1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <Reviewcard
              reviewText="As a co-worker i know biruk very much and i can tell that he is best team-worker and always corageous for programming."
              username="Bereket tadege"
              userImgUrl={IMG2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <Reviewcard
              reviewText="Biruk has made my company website all by him self,and i apprciate his passion for his proffision and his amazing desciplin"
              username="Abebaw demeke"
              userImgUrl={IMG3}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <Reviewcard
              reviewText="Biruk has made our 'Job-search' website in very attractive manner with in some days, And i say  knows  what he is doing well"
              username="Nebeyu abebe"
              userImgUrl={IMG4}
            />
          </StyledSlide>
        </Slider>
        
        <StyledDotGroup />
      </StyledCarouselProvider> 
    </ReviewsContainer> </Container> <Footer/></>
  );
}
export default Review;
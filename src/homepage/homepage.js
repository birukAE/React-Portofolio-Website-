import React, {useState} from 'react'
import Profile from "../portocontainer/home/Profile";
import Footer from "../portocontainer/home/footer/footer";
import Aboutme from "../portocontainer/aboutme/Aboutme";
import Services from "../portocontainer/Services/Services";
import Portofolio from "../portocontainer/Portofolio/Portofolio"
import Review from "../portocontainer/testemonial/Review"
import ContactSection from "../portocontainer/contactme/ContactSection";
import { Foot } from "../portocontainer/Foot/Foot";
import Navbar from "../navbar/navbar";



const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
     
      <Navbar toggle={toggle}/>
      <Profile />
      <Footer />
      <Aboutme />
      <Services />
      <Portofolio />
    <Review /> 
     <ContactSection /> 
     <Foot />
    </>
  )
}

export default Homepage;
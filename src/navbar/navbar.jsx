import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem,NavItemBtn, NavBtnLink } from './navbarcss'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const [scrollNav, setScrollNav] = useState(false)
const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHomepage = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHomepage}>BKweb</NavLogo>
          <MobileIcon
            onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars color='orange' />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click} >
          <NavItem>
              <NavLinks to='home'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              onClick={closeMobileMenu} >Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={400} spy={true} exact='true' offset={-80} onClick={closeMobileMenu}
              >About</NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              onClick={closeMobileMenu}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='resume'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              onClick={closeMobileMenu} >Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='testimonial'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              onClick={closeMobileMenu} >Testimonial</NavLinks>
            </NavItem>
            <NavItem>                 
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              onClick={closeMobileMenu} >Contact</NavLinks>
            </NavItem>
         
            <NavItemBtn>
            <NavBtnLink to='/signin' onClick={closeMobileMenu}>Sign In</NavBtnLink>
            </NavItemBtn> </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
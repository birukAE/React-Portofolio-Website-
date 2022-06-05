
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  color:white;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR) `
  color:orange;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  &:hover{
  text-decoration: none;
  color:white;}
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:orange;
  }
`;
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-bottom:-3px;
  align-items:center;
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      padding-bottom:110px;
      position: absolute;
      top: 80px;
      left: ${({ click }) => (click ? 0 : '-100%')};
      opacity: 1;
      transition: all 0.5s ease;
      background: #000;
    }
  }
`
export const NavItem = styled.li`
  height: 70px;
  &:hover {
    border-bottom: 1px solid orange;
    
  }
  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }

`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid orange;
    
  }
 
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  
      border: none;
    &:hover {
      color: orange;
      transition: all 0.2s ease-in-out;
      border: none;
    }
  }
`
export const NavBtnLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
margin-left:30px;
  border-radius: 8px;
  background-color:orange;
  color:black;
  outline: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration:none;
  }
`;
export const NavItemBtn = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:50px;
    margin-left:-40px;
  }
`;
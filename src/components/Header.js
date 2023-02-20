import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const logo ={
    display: "flex",
   alignItems:"center",
  }
  return (
    <MainHeader>
      <NavLink to="/" style={logo}>
      <img style={{width:"15rem", paddingLeft:"5rem"}} src="./images/logo1.png" alt="Logo" />
      <h2  style={{fontFamily:"cursive", textShadow:"2px 2px 4px black"}}>Bhatt Store</h2>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 12rem;
  background-color: #B9F3E4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;

//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

//css
import styled from "styled-components";

//img

// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();

// export default function Home() {
export default function Header() {
  const { pathname } = useLocation();

  //페이지 이동
  const navigate = useNavigate();
  const goMain = () => {
    navigate(`/`);
  };
  const goBack = () => {
    // navigate.goBack();
    navigate(-1);
  };
  const goForward = () => {
    // navigate.goBack();
    navigate(-1);
  };
  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };

  return (
    <>
      <AllWrap>
        <HeaderTopWrap>
          <UtilBtn onClick={goBack}>&lt;</UtilBtn>
          <Logo onClick={goMain}>React V6 Setting</Logo>
          <UtilBtn onClick={goForward}>&gt;</UtilBtn>
        </HeaderTopWrap>
        <HeaderBottom>
          <NavWrap>
            <Item selected={pathname === "/"}>
              <NavLink to="/">Main</NavLink>
              {/* <UtilBtn onClick={goMain}>onClick GoMain</UtilBtn> */}
            </Item>
            <Item selected={pathname === "/users/ididid"}>
              <NavLink to="/users/ididid">User</NavLink>
            </Item>
            <Item selected={pathname === "/about"}>
              <NavLink to="/about">About</NavLink>
            </Item>
            <Item selected={pathname === "/users/toggle"}>
              <NavLink to="/users/toggle">Toggle Action</NavLink>
              {/* <BtnText bg={props.bgWhite}></BtnText> */}
            </Item>
          </NavWrap>
          {/* <NavLink to="/user" style={isActive => ({color: isActive ? "green" : "blue"})}>유저</NavLink> */}
          {/* <NavLink to="/user" activeStyle={{fontWeight: "bold", color: "red"}}>유저</NavLink> */}
          {/* <NavLink to="/user" activeStyle={activeStyle}>유저</NavLink> */}
        </HeaderBottom>
      </AllWrap>
    </>
  );
}

const AllWrap = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderTopWrap = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UtilBtn = styled.p`
  width: 200px;
  padding: 20px;
  border-radius: 10px;

  font-size: 30px;
  text-align: center;

  cursor: pointer;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: bold;

  cursor: pointer;
`;

const HeaderBottom = styled.div``;

const NavWrap = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
`;

const Item = styled.li`
  width: 20%;

  & a {
    color: ${(props) => (props.selected ? "white" : "black")};
    background-color: ${(props) => (props.selected ? "#f1c40f" : "white")};

    /* ${({ bg }) => {
      return bg ? `color:#FAAA00;` : `color: #fff;`;
    }} */
  }
`;

const NavLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 20px;
  background: salmon;
  border-radius: 10px;

  font-size: 15px;
  text-align: center;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

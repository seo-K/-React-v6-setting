//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";

//css
import styled from "styled-components"


export default function UserSubMenu() {

    // 메뉴 클릭시 색 변경.
    const { pathname } = useLocation();

    //페이지 이동
    const navigate = useNavigate();
    const UserProfilePage = () =>{
        navigate(`/users/ididid`);
    }
    const TogglePage = () =>{
        navigate(`/users/product`);
    }

    return (
        <Container>
            <h3>User SubMenu</h3>
            <SubMenu>
                <MenuList selected={pathname === ("/users/ididid")} onClick={ () => {UserProfilePage()}}>UserProfilePage</MenuList>
                <MenuList selected={pathname === ("/users/toggle")} onClick={ () => {TogglePage()}}>productPage</MenuList>
            </SubMenu>
        </Container>
    );
  }

const Container = styled.div`
    position: relative;
    width: 20%;
    height: 100%;

    text-align: center;

    background: var(--main-color);

    & h3{
        font-size: 40px;
    }
`

const SubMenu = styled.ul`
    width: 100%;


    padding: 30px 0;
`

const MenuList = styled.li`
    font-size: 25px;
    font-weight: 700;

    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

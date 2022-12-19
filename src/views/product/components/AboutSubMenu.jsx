//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";

//css
import styled from "styled-components"


export default function AboutSubMenu() {
  
    // 메뉴 클릭시 색 변경.
    const { pathname } = useLocation();

    //페이지 이동
    const navigate = useNavigate();
    const TogglePage = () =>{
        navigate(`/users/toggle`);
    }
    const ProductPage = () =>{
        navigate(`/users/product`);
    }
    

    return (
        <Container>
            <h3>SubMenu</h3>
            <SubMenu>
                <MenuList selected={pathname === ("/about/toggle")} onClick={ () => {TogglePage()}}>TogglePage</MenuList>
                <MenuList selected={pathname === ("/about/product")} onClick={ () => {ProductPage()}}>productPage</MenuList>
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

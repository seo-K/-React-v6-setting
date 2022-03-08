//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";

//css
import styled from "styled-components"

// component
import Header from "../../component/common/Header"
import Main from "./components/Main"

// v6 에서 history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();


export default function MainPage() {
    
    const { pathname } = useLocation();
  
    //페이지 이동
    const navigate = useNavigate();
    const goProduct = () =>{
        navigate.push(`/product`);
    }

    const goBack = () =>{
        // navigate.goBack();
        navigate(-1);
    }
   

    return (
        <>
            <Wrap>
                <Header/>
                <Main/>
            </Wrap>
        </>
    );
  }

//   export default Home;


const Wrap = styled.div`
    position: relative;
    width: 100%;
`

const BackBtn = styled.p`
    width: 200px;
    padding:20px;
    background: salmon;
    border-radius: 10px;

    font-size: 15px;
    text-align: center;

    cursor: pointer;

    &:hover{
        background: #000;
        color:#fff;
    }

`

const NavWrap = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
`

const Item = styled.li`
    width: 20%;

    color: ${(props) => (props.selected ? "white" : "black")};
    background-color: ${(props) => (props.selected ? "#f1c40f" : "white")};
`


const NavLink = styled(Link)`
    display: block;
    width: 100%;
    padding:20px;
    background: salmon;
    border-radius: 10px;

    font-size:15px;
    text-align: center;

    &:hover{
        background: #000;
        color:#fff;
    }
   

`

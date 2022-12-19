import React from 'react'
import { Link,useNavigate, Outlet } from "react-router-dom";

//css
import styled from "styled-components"

//component
import Header from '../../component/common/Header';
import AboutSubMenu from './components/AboutSubMenu';

export default function AboutDefaultPage()  {

    return (
        <>
        <Header/>
        <Wrap>
            <AboutSubMenu/>
            <InnerWrap>
                <Outlet/>
            </InnerWrap>
        </Wrap>
    </>
    )
}
const Wrap = styled.div`
    display: flex;

    height: 80vh;
`

const InnerWrap = styled.div`
    position: relative;
    width: 80%;
    min-height: 100%;;

    display: flex;
`

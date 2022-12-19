import React from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom";

//css
import styled from "styled-components"

// component
import Header from '../../component/common/Header';
import UserSubMenu from './components/UserSubMenu';


export default function UserDefaultPage() {
    return (
        <>
            <Header/>
            <Wrap>
                <UserSubMenu/>
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

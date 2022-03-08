import React from 'react'
import { Link,useNavigate } from "react-router-dom";

//css
import styled from "styled-components"

//component
import Header from '../../component/common/Header';
import About from './components/About';

export default function AboutPage()  {


    return (
        <>
            <About/>
        </>
    )
}


const Wrap = styled.div`
    position: relative;
    width: 20%;
    min-height: 100%;
`

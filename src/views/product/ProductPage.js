import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";

//css
import styled from "styled-components"

//component
import Header from '../../component/common/Header';
import Product from './components/Product';

export default function ProductPage()  {


    return (
        <>
            <Product/>
        </>
    )
}

const Wrap = styled.div`
    display: flex;
`

const InnerWrap = styled.div`
    position: relative;
    width: 80%;
    min-height: 100%;;

    display: flex;
`

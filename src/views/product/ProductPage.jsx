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

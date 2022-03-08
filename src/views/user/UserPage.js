import React from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom";
//css
import styled from "styled-components"

// component
import User from './components/User';

export default function users() {
    return (
        <>
            <User/>
        </>
    )
}


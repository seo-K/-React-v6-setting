//react
import { useEffect, useState, useRef } from "react";
import { Link,useHistory } from "react-router-dom";

//css
import styled from "styled-components"

// img
import ArrowSvg from "../../assets/img/icon/icon_arrow_down.svg"

export default function Pagination() {

    return (
        <Container>
            <PaginationWrap>
                <PaginationPrev></PaginationPrev>
                <PaginationNubWrap>
                    <PaginationNub on="true">1</PaginationNub>
                    <PaginationNub>2</PaginationNub>
                    <PaginationNub>3</PaginationNub>
                    <PaginationNub>4</PaginationNub>
                    <PaginationNub>5</PaginationNub>
                </PaginationNubWrap>
                <PaginationNext on="true"></PaginationNext>
            </PaginationWrap>
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
`

const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PaginationPrev = styled.div`
    width: calc(100vw * (12/ 1920));
    height: calc(100vw * (8/ 1920));
    
    cursor: pointer;

    background: url(${ArrowSvg}) no-repeat center center / contain;

    transform:rotate(90deg);
    filter: invert(54%) sepia(0%) saturate(2460%) hue-rotate(145deg) brightness(104%) contrast(81%);

    ${({on})=>{
        return on &&
        `
        filter: invert(56%) sepia(96%) saturate(5069%) hue-rotate(4deg) brightness(106%) contrast(102%);
        `
    }}

    @media screen and (max-width: 900px) {
    }
`

const PaginationNubWrap = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 calc(100vw * (43/ 1920));

    @media screen and (max-width: 900px) {
    }
`

const PaginationNub = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100vw * (33/ 1920));
    height: calc(100vw * (33/ 1920));

    font-family: "Pop-R";
    font-size: calc(100vw * (15/ 1920));

    cursor: pointer;

    border: 1px solid transparent;
    border-radius: 50%;

    &:not(:first-child){
        margin-left: calc(100vw * (22/ 1920));
    }

    &:hover{
        color: var(--main-color);
    }

    ${({on})=>{
        return on &&
        `
            font-family: "Pop-B";
            color: var(--main-color);
            border-color: var(--main-color);
        `
    }}

    @media screen and (max-width: 900px) {
        
    }
`

const PaginationNext = styled(PaginationPrev)`
    transform:rotate(-90deg);
`

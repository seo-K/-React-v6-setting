//react
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mobile, PC } from "../../../media/MediaQuery"

//css
import styled from "styled-components";

//component
import modalScroll from "./modal"

//img
import CloseIcon from "../../../img/icon/icon_close.svg";


export default function JustModal({closeModal, contents, btnType, closeBtn}) {


    return ( 
        <Container>
            <Background onClick={()=> {closeModal(true);modalScroll.modalClosed()}}></Background>

            <ModalContents>
                {
                    closeBtn &&
                    <CloseBtnWrap onClick={()=> {closeModal(true);modalScroll.modalClosed()}} >
                        <CloseBtn src={CloseIcon} alt="닫기"/>
                    </CloseBtnWrap>
                }
                {
                    contents()
                }
                {/* {
                    btnType ?
                    <BtnList>
                        <ConfirmBtn onClick={onClick}>확인</ConfirmBtn>
                        <CancelBtn onClick={() => {setModal(false);Modal.modalClosed()}}>취소</CancelBtn>
                    </BtnList>
                    :
                    <AllConfirmBtn onClick={() => {setModal(false);Modal.modalClosed();urlClick()}}>확인</AllConfirmBtn>
                } */}
            </ModalContents>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width:100vw;
    height:100%;;
    top:0;
    left:0;
    display:flex;
    align-items: center;
    justify-content: center;

    z-index: 99;
`

const Background = styled.div`
   content: '';
   position: fixed;
   top: 0;
   left: 0;
   display: block;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.5);
`

const ModalContents = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;

    max-height: 90vh;
    border-radius: 30px;
    padding: calc(100vw * (64/ 1920)) calc(100vw * (75/ 1920)) calc(100vw * (56/ 1920)) ;
    background-color: #ffffff;

    overflow: hidden;

    z-index: 100;

    transform: translate(-50%,-50%);


    @media screen and (max-width: 900px) {
        width: calc(100vw * (378/ 428));
        max-height:90vh;
        border-radius: 25px;
        /* padding: calc(100vw * (46/ 428)) calc(100vw * (18/ 428)) calc(100vw * (44/ 428)) ; */
        padding: calc(100vh * (46/ 882)) calc(100vh * (18/ 882)) calc(100vh * (44/ 882)) ;
    }
`

const CloseBtnWrap = styled.div`
    position: absolute;
    /* top:calc(100vw * (40/ 1920)); */
    top:calc(100vw * (50/ 1920));
    right:calc(100vw * (64/ 1920));
    width: calc(100vw * (16/ 1920));
    height: calc(100vw * (16/ 1920));

    z-index: 10;

    cursor: pointer;

    @media screen and (max-width: 900px) {
        /* top:calc(100vw * (40/ 428));
        right:calc(100vw * (64/ 428)); */
        top:calc(100vw * (27/ 428));
        right:calc(100vw * (23/ 428));
        width: calc(100vw * (16/ 428));
        height: calc(100vw * (16/ 428));
    }
`

const CloseBtn = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const BtnList = styled.div`
    
`

const ConfirmBtn = styled.div`
    
`

const CancelBtn = styled.div`
    
`

const AllConfirmBtn = styled.div`
    
`

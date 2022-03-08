//react
import { useEffect, useState } from "react";

//css
import styled from "styled-components"

// page
import Header from '../component/common/Header';
import MainSlider from '../component/main/MainSlider';
import ServiceMenu from '../component/main/ServiceMenu';
import NewJobPosting from '../component/main/NewJobPosting';
import Footer from '../component/common/Footer';
import TestModal from "../component/sjh/testModal";



export default function TestPage() {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);


    const onClickFirstSubmit = () => {
        setIsModal(false)
        setIsModal2(true)
    }

    const returnList = () => {
        return(
            <>
                <div>f삭제하시겠습니까</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <button onClick={onClickFirstSubmit} >확인</button>
                <button onClick={() => setIsModal(false)}>취소</button>
            </>
        )
    }

    const returnSecondList = () => {
        return(
            <>
                <div>fi삭제되었습니다</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <button onClick={() => console.log("확인")} >확인</button>
                <button onClick={() => setIsModal2(false)}>취소</button>
            </>
        )
    }



    return (
        <>
            <Container>

                {
                    isModal &&  
                    <TestModal closeModal={() => setIsModal(false)} contents={returnList}/>
                }
                {
                    isModal2 &&  
                    <TestModal closeModal={() => setIsModal2(false)} contents={returnSecondList}/>
                }

                <Button onClick={() => setIsModal(true)} >버튼</Button>
                <Button onClick={() => setIsModal2(true)} >버튼2</Button>
            </Container>
        </>

    )
}

const Container = styled.div`
    position: relative;
    width:100%;
    height: 100%;
`

const ContentWrap = styled.div`
    position: relative;
    width:100%;
    height: 100%;
    min-height: 100%;;
    padding-top: calc(100vw * (70/ 1920));

    @media screen and (max-width: 900px) {
        padding-top: calc(100vw * (78 / 428));
    }
`

const Button = styled.p`
    width:200pc;
    height: 50px;
    border: 1px solid salmon;    
    cursor:pointer;
`
//css
import { Link } from "react-router-dom";
import styled from "styled-components"

//img
import CheckCircleSvg from "../../assets/img/icon/icon_check_circle.svg" 
import UnCheckCircleSvg from "../../assets/img/icon/icon_unchecked_circle.svg" 


export default function RadioBox(props) {

    return (
        <RadioWrap>
            <RadioInput
                id={props.id}
                type="radio"
                name={props.name}
                defaultChecked={props.checked}
            />
            <RadioLabel htmlFor={props.id}>
                <RadioImg></RadioImg>
                <RadioText>{props.text}</RadioText>
            </RadioLabel>
        </RadioWrap>
    );
}


const RadioWrap = styled.div`

    &:not(:first-child){
        margin-left: calc(100vw * (20/ 1920));
    }
`

const RadioInput = styled.input`
    display: none;

     &:checked + label span:first-child{
        background-image: url(${CheckCircleSvg});
    }
    
`

const RadioLabel = styled.label`
    display:flex;
    align-items: center;
`

const RadioImg = styled.span`
    flex-shrink: 0;
    width: calc(100vw * (20/ 1920));
    height: calc(100vw * (20/ 1920));

    margin-right: calc(100vw * ( 10 / 1920));
    background: url(${UnCheckCircleSvg}) no-repeat center center /contain;
`

const RadioText = styled.span`
    font-size: calc(100vw * (15/ 1920));
`
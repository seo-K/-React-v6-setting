//css
import { Link } from "react-router-dom";
import styled from "styled-components"

//img
// import CheckIcon from "../../assets/img/icon/icon_check_only.svg" 


export default function CheckBox(props) {

  

    return (
            <>
                <ChkInput active={props.active} type="checkbox" id={props.id}/>
                <ChkLabel htmlFor={props.id}>
                    <ChkImg></ChkImg>
                    <ChkText>{props.text}</ChkText>
                    <ChkOption gray={props.gray}>{props.option}</ChkOption>
                </ChkLabel>
            </>
    );
}

const ChkInput = styled.input`
    display:none;

    &:checked + label span:first-child{
        background: var(--main-color);
    }
    
    &:not(:first-child){
        padding-left: calc(100vw * (27/ 1920));
    }
    
    &:checked + label span:first-child:after{
        height: calc(100vw * (7/ 1920));
    }

    &:checked + label span:first-child:before{
        height: calc(100vw * (11/ 1920));
        transition-delay: 0;
    }

    ${({active}) => {
        return active &&
        `
        &:checked + label span {
            color: var(--main-color);
        }
        `
    }}

    
`

const ChkLabel = styled.label`
    display:flex;
    align-items: center;
`

const ChkImg = styled.span`
    flex-shrink: 0;
    position: relative;
    display: inline-block;
    width: calc(100vw * (20/ 1920));
    height: calc(100vw * (20/ 1920));

    margin-right: calc(100vw * ( 10 / 1920));
    
    border-radius: 4px;
    border: 1px solid var(--main-color);
    background-color: #fff;

    &:after,
    &:before{
        position:absolute;
        content:'';

        width: calc(100vw * (3/ 1920));
        height: 0;

        background-color: #fff;
        transform-origin:left top;
    }

    &:after{
        top: 45%;
        left: 12%;

        transform: rotate(-45deg);
        border-radius: 4px 4px 0 0;
        transition: height 0.2s ease;
    }
    &:before{
        top: 76%;
        left: 44%;
        
        transform: rotate(-135deg);
        border-radius: 4px;
        transition: height .2s ease .2s;
    }

`

const ChkText = styled.span`
    font-size: calc(100vw * (14/ 1920));
    color: #222222;


`
const ChkOption = styled.span`
    font-size: calc(100vw * (14/ 1920));
    color: var(--main-color);
    margin-left: calc(100vw * (10/ 1920));

    ${({gray})=>{
        return gray  &&  `color:#AAAAAA;`   
    }}

`
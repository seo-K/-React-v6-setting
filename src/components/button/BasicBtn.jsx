//css
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BasicBtn(props) {
  return (
    <BtnText
      onClick={props.onClick}
      gray={props.gray} // 회색 버튼
      black={props.black} // 검정 글자
      border={props.border} // 오렌지 보더 버튼
      del={props.delbtn} // 삭제 버튼
      disabled={props.disabled} // 비활성화 여부
    >
      {props.text}
    </BtnText>
  );
}

const BtnText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: calc(100vw * (15 / 1920));
  text-align: center;

  border-radius: 5px;
  cursor: pointer;

  padding: calc(100vw * (12 / 1920)) 0;

  color: #fff;
  background: var(--main-color);

  &:not(:first-of-type) {
    /* margin-top: calc(100vw * (11/ 1920)); */
  }

  ${({ gray }) => {
    return (
      gray &&
      `
            color: #AAAAAA;
            border: 1px solid #dddddd;
            background: #fff;

        `
    );
  }}

  ${({ border }) => {
    return (
      border &&
      `
            color: var(--main-color);
            border: 1px solid  var(--main-color);
            background: #fff;
        `
    );
  }}

    ${({ black }) => {
    return (
      black &&
      `
        // 뭘깡아ㅏㅇ
            // font-size: calc(100vw * (11/ 1920));
            color:#222;
        `
    );
  }}

    ${({ del }) => {
    return (
      del &&
      `
            border-color: #D8D8D8;
            background: #fff;
        `
    );
  }}
    ${({ disabled }) => {
    return (
      disabled &&
      `
            border-color: #DDD;
            background:#DDD;
            color:#fff;

            cursor: unset;
        `
    );
  }}


    @media screen and (max-width: 900px) {
    width: auto;
    flex: 1;

    font-size: calc(100vw * (16 / 428));
    border-radius: 50px;
    padding: calc(100vw * (12 / 428)) 0;

    &:not(:first-of-type) {
      margin-top: 0;
    }
    & b {
      font-size: calc(100vw * (16 / 428));
    }
  }
`;

//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

//css
import styled from "styled-components";

// img
// import ArrowDownSvg from "../../assets/img/icon/icon_arrow_down.svg"

export default function SelectBox(props) {
  return (
    <>
      <OptionListBigWrap
        gray={props.gray} // 회색 배경
        borderGray={props.borderGray} // 회색 border
        borderActive={props.optionBoxShow ? true : null}
      >
        <SelectedButton
          active={props.optionBoxShow ? true : null}
          onClick={() => {
            props.setOptionBoxShow(!props.optionBoxShow);
          }}
        >
          {props.optionSelect}
        </SelectedButton>
        {props.optionBoxShow ? (
          <SelectListBox borderActive={props.optionBoxShow ? true : null}>
            {props.optionList.map((option, index) => {
              return (
                <OptionBtn
                  key={"option" + index}
                  onClick={() => {
                    props.setOptionBoxShow(false);
                    props.setOptionSelect(option);
                  }}
                >
                  {option}
                </OptionBtn>
              );
            })}
          </SelectListBox>
        ) : null}
      </OptionListBigWrap>
    </>
  );
}

const OptionListBigWrap = styled.div`
  position: relative;
  width: 100%;

  border: 1px solid #aaa;
  border-radius: 5px;

  ${({ gray }) => {
    return (
      gray &&
      `
            border-color:transparent;
            background: #fafafa;
        `
    );
  }}
  ${({ borderGray }) => {
    return (
      borderGray &&
      `
            border-color: #DDD;
        `
    );
  }}

    ${({ borderActive }) => {
    return (
      borderActive &&
      `
                border-color: var(--main-color);
                border-bottom-color: transparent;
                border-radius: 5px 5px 0 0;

                background: #fff;
            `
    );
  }}
`;

const SelectedButton = styled.p`
  position: relative;
  width: 100%;

  font-size: calc(100vw * (15 / 1920));
  padding: calc(100vw * (12 / 1920)) calc(100vw * (15 / 1920));

  cursor: pointer;

  &:after {
    position: absolute;
    top: 50%;
    right: calc(100vw * (15 / 1920));
    content: "";
    width: calc(100vw * (10 / 1920));
    height: calc(100vw * (6 / 1920));

    transform: translateY(-50%);
    filter: invert(59%) sepia(3%) saturate(0%) hue-rotate(26deg) brightness(97%) contrast(87%);
  }

  ${({ active }) => {
    return (
      active &&
      `
            color: var(--main-color);

            &:after{
                transform: translateY(-50%) rotate(180deg);
            }
        `
    );
  }}

  ${({ orange }) => {
    return (
      orange &&
      `
            &:after{
                filter: invert(44%) sepia(57%) saturate(3039%) hue-rotate(358deg) brightness(97%)
            }
        `
    );
  }}
`;
const SelectListBox = styled.ul`
  position: absolute;
  top: 100%;
  left: -1px;

  width: 100%;
  max-height: calc(100vw * (280 / 1920));
  background: #fff;

  z-index: 5;
  overflow-y: auto;

  ${({ borderActive }) => {
    return (
      borderActive &&
      `
                border: 1px solid var(--main-color);
                border-top: none;
                border-radius: 0 0 5px 5px;
                box-sizing: content-box;
            `
    );
  }}
`;

const OptionBtn = styled.li`
  font-size: calc(100vw * (15 / 1920));
  padding: calc(100vw * (12 / 1920)) calc(100vw * (15 / 1920));

  cursor: pointer;
`;

//react
import { useEffect, useState, useRef, useReducer  } from "react";
import { Link,useNavigate, useLocation, useParams  } from "react-router-dom";

//css
import styled from "styled-components"

export default function TogglePage(){
    
      const [shownComments, setShownComments] = useState({});
      const toggleComment = id => {
          setShownComments(prevShownComments => ({ 
              ...prevShownComments,
              [id]: !prevShownComments[id]})); 
      };
    // 문의 리스트 data
    const qnaDataList = [ 
        {
            id:0,
            content: [<>문의내용 입니다1</>],
            answer: [<>답변입니다1</>],
        },
        {
            id:1,
            content: [<>문의내용 입니다22</>],
            answer: [<>답변입니다22</>],
        },
        {
            id:2,
            content: [<>문의내용 입니다333</>],
            answer: [<>답변입니다33</>],
        },
        
    ]
    

    return (
        <Warp>
            <QnaTop>
                <QnaBigTitle>상품문의</QnaBigTitle>
            </QnaTop>
            <QnaListWrap>
                {
                    qnaDataList.map((list, index) => {
                        return(
                            <QnaListBox key={index}>
                                <SimpleQnaBox>
                                    <QnaTitle onClick={() => toggleComment(list.id)} >
                                        {list.content}
                                    </QnaTitle>
                                </SimpleQnaBox>

                                {/* 답글 위치 */}
                                {
                                    shownComments[list.id] ?
                                    <HideQnaBox>
                                        <QnaContent>{list.content}</QnaContent>
                                        <AnswerArea>
                                            <AnswerContent>
                                                <AnswerText>{list.answer}</AnswerText>
                                            </AnswerContent>
                                        </AnswerArea>
                                    </HideQnaBox>
                                     :
                                     null
                                 }
                            </QnaListBox>
                        )
                    })
                }
            </QnaListWrap>
        </Warp>
    );
  }


const Warp = styled.div`
    position: relative;
    width: calc(100vw * (1060/ 1920));
    margin: 0 auto;

    padding-top: calc(100vw * (40/ 1920));
`


const QnaTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:  calc(100vw * (30/ 1920))  calc(100vw * (20/ 1920));

`
const QnaBigTitle = styled.h4`
    font-size:  calc(100vw * (25/ 1920));
`

const QnaListWrap = styled.ul`
    margin-bottom: calc(100vw * (80/ 1920));
`

const QnaListBox = styled.li`

`

const SimpleQnaBox = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;

    padding:  calc(100vw * (30/ 1920)) 0;
`

const QnaTitle = styled.p`
    display: flex;
    align-items: center;

    font-size: calc(100vw * (15/ 1920));

    max-width: calc(100vw * (500/ 1920));
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

    margin-right: auto;
    
    cursor: pointer;
`

const HideQnaBox = styled.div`
    width: calc(100vw * (930/ 1920));

    padding: calc(100vw * (20/ 1920)) calc(100vw * (50/ 1920)) calc(100vw * (20/ 1920)) calc(100vw * (110/ 1920));
    margin: 0 calc(100vw * (20/ 1920)) 0 auto;
`
const QnaContent = styled.p`
    width: 100%;
    font-family: "Noto-R";
    font-size: calc(100vw * (15/ 1920));

    padding-bottom: calc(100vw * (20/ 1920));
    padding-right: calc(100vw * (140/ 1920));
`
const AnswerArea = styled.div`
    display: flex;
    
    padding-top: calc(100vw * (20/ 1920));

    border-top: 1px solid #DDD;
`

const AnswerContent = styled.div`
`

const AnswerText = styled.p`
    width: calc(100vw * (710/ 1920));

    font-family: "Noto-R";
    font-size: calc(100vw * (15/ 1920));

    margin-bottom: calc(100vw * (9/ 1920));
`

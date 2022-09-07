import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonCollection from "src/components/ButtonCollection";
import CalendarList from "src/components/CalendarList";
import CalendarTable from "src/components/CalendarTable";
import { DatabusDispatch } from "src/redux/reducers/Databus";
import { PageInfoDispatch } from "src/redux/reducers/PageInfo";
import { colorCommonDarkBlue } from "src/style/CommonColor";
import { cssPageHeader } from "src/style/CommonStyles";
import styled from "styled-components";
import Regist from "./Regist";

interface PropType{
    action : actionType
}
interface actionType {
    close : Function
}

export default function Calendar({action} : PropType){

    const dispatch = useDispatch();
    const [calDate, setCalDate] = useState<Date>(new Date());
    const CalSliderRef = useRef<HTMLDivElement>(null);
    const [monthList, setMonthList] = useState([
        new Date(new Date().getFullYear(),new Date().getMonth()-2),
        new Date(new Date().getFullYear(),new Date().getMonth()-1), 
        new Date(),
        new Date(new Date().getFullYear(),new Date().getMonth()+1),
        new Date(new Date().getFullYear(),new Date().getMonth()+2)
    ]);
    const [selectDate, setSelectDate] = useState(new Date());

    const HeaderBtns = [
        {
            dom : <span>오늘</span>,
            action : function(){
                action.close();
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
        },
        {
            dom : <h2>{calDate.getFullYear()} {calDate.getMonth()+1 > 9 ? calDate.getMonth()+1 : '0'+(calDate.getMonth()+1)}</h2>,
            action : function(){
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
            },
        },
        {
            dom : <span>추가</span>,
            action : function(){
                dispatch(DatabusDispatch.SET_DATA({
                    regDate : selectDate
                }));
                addView(Regist);
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
        }
    ];

    function addView(view : Function){
        dispatch(PageInfoDispatch.addView(view));
    }

    // function renderCalendar(){
    //     return monthList.map((month,i)=>{
    //         let isActive = false;
    //         if(month.getFullYear() === calDate.getFullYear() && month.getMonth() === calDate.getMonth()) isActive = true
    //         return <CalendarTable key={i} active={isActive} calDate={month}/>
    //     });
    // }

    function moveMonth(type : 'next'|'prev'){
        switch (type) {
            case 'next':
                setCalDate(new Date(calDate.getFullYear(),calDate.getMonth()+1));
                break;
            case 'prev':
                setCalDate(new Date(calDate.getFullYear(),calDate.getMonth()-1));
                break;
            default:
                break;
        }
    }


    return (
        <>
            <Header>
                <HeaderButtons>
                    <ButtonCollection 
                        option={{
                            lineType : "horizon",
                            space : 'between'
                        }} 
                        buttons={HeaderBtns} />
                </HeaderButtons>
            </Header>
            <Body>
                <CalSection>
                    <CalSlider ref={CalSliderRef}>
                        {/* {renderCalendar()} */}
                        <CalendarTable selectDate={selectDate} setSelectDate={setSelectDate} active={true} calDate={calDate}/>
                    </CalSlider>
                    <CalBtnTr>
                        <CalBtnTd><CalButton onClick={()=>{moveMonth('prev')}}>&lt;</CalButton></CalBtnTd>
                        <CalBtnTd><CalButton onClick={()=>{moveMonth('next')}}>&gt;</CalButton></CalBtnTd>
                    </CalBtnTr>
                </CalSection>
                <List>
                    <CalendarList selectDate={selectDate} />
                </List>
            </Body>
        </>
    )
}


const Header = styled.div`
    ${cssPageHeader}
    width : 100%;
    height : 6%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HeaderButtons = styled.div`
    ${cssPageHeader}
    width : 90%;
    height : 100%;
`;

const Body = styled.div`
    width: 100%;
    height: 94%;
    /* padding : 0px 7%; */
    background : white;
    overflow: auto;
    box-sizing: border-box;

`;
const CalSection = styled.div`
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
`
const CalSlider = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 20rem;
    /* transition: transform 0.1s; */
`
const CalBtnTr = styled.div`
    display: flex;
    width: 100vw;
`
const CalBtnTd = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`
const CalButton = styled.button`
    width: 70%;
    height : 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border : none;
    line-height: -1;
    font-size: 2rem;
    font-weight: bold;
    background-color: ${colorCommonDarkBlue};
    color: white;
    outline: none;
    border-radius: 5px;
`
const List = styled.div`
    width: 100%;
    height: calc(100% - 24rem);
    overflow-y: auto;
    padding-top: 1rem;
    box-sizing: border-box;
`
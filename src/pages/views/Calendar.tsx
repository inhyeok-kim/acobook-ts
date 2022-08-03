import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonCollection from "src/components/ButtonCollection";
import CalendarTable from "src/components/CalendarTable";
import { PageInfoDispatch } from "src/redux/reducers/PageInfo";
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

    function renderCalendar(){
        return monthList.map((month,i)=>{
            let isActive = false;
            if(month.getFullYear() === calDate.getFullYear() && month.getMonth() === calDate.getMonth()) isActive = true
            return <CalendarTable key={i} active={isActive} calDate={month}/>
        });
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
                        {renderCalendar()}
                    </CalSlider>
                </CalSection>
                
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
    /* transition: transform 0.1s; */
`
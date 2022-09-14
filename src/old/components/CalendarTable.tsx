import { useState } from "react";
import { colorCommonDarkBlue } from "src/old/style/CommonColor";
import styled from "styled-components";

interface propType{
    calDate : Date
    active? :boolean
    selectDate : Date
    setSelectDate : Function
}

export default function CalendarTable({
    calDate,
    active = true,
    selectDate = new Date(),
    setSelectDate
} : propType){

    function renderCalendar(){
        const today = new Date();
        const firstDateOfMonth = new Date(calDate.getFullYear(),calDate.getMonth(),1);
        const lastDateOfMonth = new Date(calDate.getFullYear(),calDate.getMonth()+1,0);
        const minorDate = firstDateOfMonth.getDay();
        const plusDate = 6 - lastDateOfMonth.getDay();


        const dateList : Date[] = [];
        for(let i=minorDate-1; i >= 0; i--){
            dateList.push(new Date(firstDateOfMonth.getFullYear(),firstDateOfMonth.getMonth(),-i));
        }
        for(let i=firstDateOfMonth.getDate(); i <= lastDateOfMonth.getDate();i++){
            dateList.push(new Date(firstDateOfMonth.getFullYear(),firstDateOfMonth.getMonth(),i));
        }
        for(let i=1; i <= plusDate; i++){
            dateList.push(new Date(lastDateOfMonth.getFullYear(),lastDateOfMonth.getMonth()+1,+i));
        }
        
        return dateList.map(date=>{
            let className = '';
            if(date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) className += 'today ';
            if(date.getDate() === selectDate.getDate() && date.getMonth() === selectDate.getMonth()) className += 'select ';
            if(date.getMonth() !== calDate.getMonth()) className += 'inactive ';
            return (
                <CalDateTd className={className}
                    onClick={()=>{setSelectDate(date)}}
                    key={date.getMonth()+''+date.getDate()}
                >{date.getDate()}</CalDateTd>
            )
        });
    }


    return (
        <CalTable style={active ? {color:'black'} : {color:'grey'}}>
            <CalTr>
                <CalDayTd>일</CalDayTd>
                <CalDayTd>월</CalDayTd>
                <CalDayTd>화</CalDayTd>
                <CalDayTd>수</CalDayTd>
                <CalDayTd>목</CalDayTd>
                <CalDayTd>금</CalDayTd>
                <CalDayTd>토</CalDayTd>
            </CalTr>
            <CalTr>
                {renderCalendar()}
            </CalTr>
        </CalTable>
    )
}

const CalTable = styled.div`
    scroll-snap-align: start;
`

const CalTr = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    & > div {
        box-sizing: border-box;
    }
`
const CalDateTd = styled.div`
    width: calc(100vw / 7);
    height : 3rem;
    text-align: center;
    padding-top: 0.6rem;
    border-radius: 10px;
    &.today {
        border : 1px solid ${colorCommonDarkBlue};
    }
    &.select {
        background-color: ${colorCommonDarkBlue};
        color: white !important;
    }
    &.inactive{
        color : grey;
    }
`
const CalDayTd = styled.div`
    width: calc(100vw / 7);
    height : 2rem;
    text-align: center;

`

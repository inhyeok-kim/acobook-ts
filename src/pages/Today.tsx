import styled from 'styled-components';
import {cssPageHeader} from 'src/style/CommonStyles';
import {colorCommonDarkBlue as ccdb} from 'src/style/CommonColor';
import {H5} from 'src/style/CommonTag'
import { formatCurrency, formatStringToDate } from 'src/utils/FormatUtil';
import { useEffect, useMemo, useState } from 'react';

import Navigation from 'src/components/Navigation';
import HistoryList from 'src/components/HistoryList';
import { useSelector } from 'react-redux';
import { RootReducerType } from 'src/redux/RootReducer';
import { getHistoryList } from 'src/service/HistoryService';

export default function Today(){
    const historyList = useTodayList()

    const totalHistory = useMemo(()=>{
        return sumAmount(historyList);
    }, [historyList]);

    function loadHistoryData(){
        getHistoryList()
    }
    useEffect(()=>{
        loadHistoryData();
    },[]);
    
    // const [todayList, setTodayList] = useState(window.databse.dummyTodayList);
    // const totalToday = useMemo(()=>{
    //     return sumAmount(todayList);
    // }, [todayList]);


    return (
        <>
            <Header>
                <H2>{formatStringToDate(new Date(),'yyyy mm dd', true)}</H2>
            </Header>
            <Body>
                <H5>오늘</H5>
                <HistoryList today={true} list={historyList} />
                <H5 align='right'>{totalHistory > 0 ? '' : '-'} &#8361;{formatCurrency(Math.abs(totalHistory))}</H5>
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
        </>
    )
}

function useTodayList(){
    const historyList = useSelector((state : RootReducerType)=>state.HistoryData);
    const today = new Date();
    const todayList = historyList.filter((v)=>{
        let isToday = true;
        if(today.getFullYear() !== v.date.getFullYear()) isToday = false;
        if(today.getMonth() !== v.date.getMonth()) isToday = false;
        if(today.getDate() !== v.date.getDate()) isToday = false;
        return isToday;
    });
    return todayList;
}

function sumAmount(list : Array<HistoryType>){
    let result = 0;
    list.forEach(v=>{
        if(v.type === 'income'){
            result += v.amount;
        } else if(v.type === 'expense'){
            result -= v.amount;
        }
    })
    return result;
    
}

// 스타일 interface

const Header = styled.div`
    width : 100%;
    height : 10%;
    ${cssPageHeader}
    color : white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const H2 = styled.h2`
    margin: 0px;
`;
const Body = styled.div`
    width: 100%;
    height: 80%;
    background : white;
    overflow: scroll;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${ccdb};
`;
//style
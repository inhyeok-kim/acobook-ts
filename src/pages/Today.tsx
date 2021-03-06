import styled from 'styled-components';
import {cssPageHeader} from 'src/style/CommonStyles';
import {colorCommonDarkBlue as ccdb} from 'src/style/CommonColor';
import {H5} from 'src/style/CommonTag'
import { formatCurrency, formatStringToDate } from 'src/utils/FormatUtil';
import { useEffect, useMemo, useState } from 'react';

import Navigation from 'src/components/Navigation';
import HistoryList from 'src/components/HistoryList';
import { getTodayHistory } from 'src/service/HistoryService';
import { useSelector } from 'react-redux';
import { RootReducerType } from 'src/redux/RootReducer';

export default function Today(){

    const reload = useSelector((state : RootReducerType)=> state.Reload);

    const [todayHistoryList, setTodayHistoryList] = useState<HistoryType[]>([])
    useEffect(()=>{
        loadHistoryData();
    },[reload]);

    async function loadHistoryData(){
        const result = await getTodayHistory();
        setTodayHistoryList(result as HistoryType[]);
    }
    const totalHistory = useMemo(()=>{
        return sumAmount(todayHistoryList);
    }, [todayHistoryList]);


    return (
        <>
            <Header>
                <H2>{formatStringToDate(new Date(),'yyyy mm dd', true)}</H2>
            </Header>
            <Body>
                <H5>오늘</H5>
                <HistoryList today={true} list={todayHistoryList} />
                <H5 align='right'>{totalHistory > 0 ? '' : '-'} &#8361;{formatCurrency(Math.abs(totalHistory))}</H5>
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
        </>
    )
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
import styled from 'styled-components';
import {cssPageHeader} from 'src/style/CommonStyles';
import {colorCommonDarkBlue as ccdb} from 'src/style/CommonColor';
import {H5} from 'src/style/CommonTag'
import { formatCurrency, formatDate } from 'src/utils/FormatUtil';
import { useMemo, useState } from 'react';

import Navigation from 'src/components/Navigation';
import HistoryList from 'src/components/HistoryList';
import { useSelector } from 'react-redux';
import { RootReducerType } from 'src/redux/RootReducer';

export default function Today(){
    const historyList = useSelector((state : RootReducerType)=>state.HistoryData);

    const totalHistory = useMemo(()=>{
        return sumAmount(historyList);
    }, [historyList]);
    
    // const [todayList, setTodayList] = useState(window.databse.dummyTodayList);
    // const totalToday = useMemo(()=>{
    //     return sumAmount(todayList);
    // }, [todayList]);


    return (
        <>
            <Header>
                <H2>{formatDate(new Date(),'yyyy mm dd', true)}</H2>
            </Header>
            <Body>
                {/* <H5>예정</H5>
                <HistoryList today={true} list={historyList} />
                <H5 align='right'>{totalHistory > 0 ? '' : '-'} &#8361;{formatCurrency(Math.abs(totalHistory))}</H5> */}
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
import styled from 'styled-components';
import {cssPageHeader} from 'src/style/CommonStyles';
import {colorCommonDarkBlue as ccdb, colorCommonGradient as ccg} from 'src/style/CommonColor';
import { useMemo, useState } from 'react';
import {formatCurrency} from 'src/utils/FormatUtil'

import ButtonCollection from 'src/components/ButtonCollection';
import Navigation from 'src/components/Navigation';
import BalanceList from 'src/components/BalanceList';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from 'src/redux/RootReducer';
import { PageInfoDispatch } from 'src/redux/reducers/PageInfo';
import BalanceRegist from './views/BalanceRegist';

export default function Balance({}){
    const dispatch = useDispatch();
    function addView(view : Function){
        dispatch(PageInfoDispatch.addView(view));
    }

    const [update,setUpdate] = useState(false);

    const accountList = useSelector((state : RootReducerType)=>state.BalanceData);

    const assetList = useMemo(()=>{
        return accountList.filter((account)=>{
            return account.type === 'account';
        })
    },[accountList]);

    const deptList = useMemo(()=>{
        return accountList.filter((account)=>{
            return account.type === 'debt';
        })
    },[accountList]);

    const HeaderBtns = useMemo(()=>[
        {
            dom : <span style={{visibility : update ? 'visible' : 'hidden'}}>추가</span>,
            action : function(){
                addView(BalanceRegist);
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            }
        },
        {
            dom : <h2>잔액</h2>,
            action : function(){
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
            },
            disabled : true,
        },
        {
            dom : update ? '완료' : '수정',
            action : function(){
                setUpdate(curr=>!curr);
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            }
        }
    ],[update]);

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
                <div>
                    <TitleWrapper>
                        <span>지불계정</span>
                        <span>&#8361;{formatCurrency(sumTotal(assetList))}</span>
                    </TitleWrapper>
                    <BalanceList list={assetList} modify={false} />
                </div>
                <div>
                    <TitleWrapper>
                        <span>신용카드</span>
                        <span>&#8361;{formatCurrency(sumTotal(deptList))}</span>
                    </TitleWrapper>
                    <BalanceList list={deptList} modify={false} type='debt' />
                </div>
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
        </>
    )
}

function sumTotal(list : Array<BalanceType>){
    return list.reduce((p:number,c:BalanceType)=>p + c.amount,0);
}

// 스타일
const TitleWrapper = styled.div`
    background-color: ${ccdb};
    color : white;
    height : 4%;
    padding: 0px 5%;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
`

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
    height: 84%;
    background : white;
    overflow: auto;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${ccdb};
`;
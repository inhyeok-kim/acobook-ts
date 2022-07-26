import styled from 'styled-components';
import {cssPageHeader} from 'src/style/CommonStyles';
import {colorCommonDarkBlue as ccdb, colorCommonGradient as ccg} from 'src/style/CommonColor';
import { useEffect, useMemo, useState } from 'react';
import {formatCurrency} from 'src/utils/FormatUtil'

import ButtonCollection from 'src/components/ButtonCollection';
import BalanceList from 'src/components/BalanceList';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from 'src/redux/RootReducer';
import { PageInfoDispatch } from 'src/redux/reducers/PageInfo';
import BalanceRegist from 'src/pages/views/BalanceRegist';
import { DatabusDispatch } from 'src/redux/reducers/Databus';
import { getBalanceList } from 'src/service/BalanceService';

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function BalanceSelect({action} : PropType){
    const dispatch = useDispatch();
    function addView(view : Function){
        dispatch(PageInfoDispatch.addView(view));
    }

    const [update,setUpdate] = useState(false);

    function loadBalanceData(){
        getBalanceList()
        .then((result)=>{
            setBalanceList(result as Array<BalanceType>);
        });
    }
    
    const databus = useSelector((state : RootReducerType)=> state.Databus);
    useEffect(()=>{
        loadBalanceData();
    },[]);

    const [balanceList,setBalanceList] = useState<Array<BalanceType>>([]);
    useEffect(()=>{
        loadBalanceData();
    },[databus]);

    const accountList = useMemo(()=>{
        return balanceList.filter((account)=>{
            return account.type === 'account';
        })
    },[balanceList]);

    const cardList = useMemo(()=>{
        return balanceList.filter((account)=>{
            return account.type === 'credit_card';
        })
    },[balanceList]);

    const debtList = useMemo(()=>{
        return balanceList.filter((account)=>{
            return account.type === 'debt';
        })
    },[balanceList]);

    const assetList = useMemo(()=>{
        return balanceList.filter((account)=>{
            return account.type === 'asset';
        })
    },[balanceList]);

    const HeaderBtns = useMemo(()=>[
        {
            dom : update ? <span>추가</span> : <span>취소</span>,
            action : function(){
                if(update){
                    addView(BalanceRegist);
                } else {
                    action.close();
                }
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            }
        },
        {
            dom : <h2>계정선택</h2>,
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

    function selectAccount(account:Object){
        dispatch(DatabusDispatch.SET_DATA(account));
        action.close();
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
                {accountList ? 
                    <div>
                        <TitleWrapper>
                            <span>지불계정</span>
                            <span>&#8361;{formatCurrency(sumTotal(accountList))}</span>
                        </TitleWrapper>
                        <BalanceList onClick={selectAccount} list={accountList} modify={update} />
                    </div>
                    :
                    ''
                }
                {cardList ?
                    <div>
                        <TitleWrapper>
                            <span>신용카드</span>
                            <span>&#8361;{formatCurrency(sumTotal(cardList))}</span>
                        </TitleWrapper>
                        <BalanceList onClick={selectAccount} list={cardList} modify={update} type='debt' />
                    </div>
                    :''
                }
                {assetList ? 
                    <div>
                        <TitleWrapper>
                            <span>자산</span>
                            <span>&#8361;{formatCurrency(sumTotal(assetList))}</span>
                        </TitleWrapper>
                        <BalanceList onClick={selectAccount} list={assetList} modify={update} />
                    </div>
                    :
                    ''
                }
                {debtList ?
                    <div>
                        <TitleWrapper>
                            <span>부채</span>
                            <span>&#8361;{formatCurrency(sumTotal(debtList))}</span>
                        </TitleWrapper>
                        <BalanceList onClick={selectAccount} list={debtList} modify={update} type='debt' />
                    </div>
                    :''
                }
            </Body>
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
    height: 94%;
    background : white;
    overflow-x: hidden;
    overflow-y: scroll;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${ccdb};
`;
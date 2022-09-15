import { useMemo, useRef, useState } from "react";
import ButtonCollection from "src/old/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/old/style/CommonColor";
import { cssPageHeader } from "src/old/style/CommonStyles";
import styled from "styled-components"
import {useDispatch} from 'react-redux'
import SelectButtons from "src/old/components/SelectButtons";
import InputCurrency from "src/old/components/InputCurrency";
import { registBalance } from "src/service/BalanceService";
import { ReloadDispatch } from "src/old/redux/reducers/Reload";

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function BalanceRegist({action} : PropType){
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();
    
    const HeaderBtns = [
        {
            dom : <span style={{visibility : changeMode ? 'hidden' : 'visible'}}>취소</span>,
            action : function(){
                action.close();
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        },
        {
            dom : <h2>잔액</h2>,
            action : function(){
                setChangeMode(curr=>!curr);
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
            },
        },
        {
            dom : <span style={{visibility : changeMode ? 'hidden' : 'visible'}}>저장</span>,
            action : function(){
                regist();
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        }
    ];
    
    const [type, setType]  : ['account'|'credit_card'|'debt'|'asset',Function] = useState('account');
    const [balanceNm, setBalanceNm] = useState('');
    const [ammount, setAmmount] = useState('0');

    function regist(){
        // let newBalance : BalanceType;
        // newBalance = {
        //     // balanceNm : balanceNm,
        //     amount : parseInt(ammount.replaceAll(',','').replaceAll('₩','')),
        //     // type : type
        // }
        // registBalance(newBalance).then(()=>{
        //     dispatch(ReloadDispatch.RELOAD());
        //     action.close();
        // });
    }

    const typeOptions = useMemo(()=>([
        {
            name : '계좌',
            value : 'account'
        },
        {
            name : '신용카드',
            value : 'credit_card'
        },
        {
            name : '부채',
            value : 'debt'
        },
        {
            name : '자산',
            value : 'asset'
        },
    ]),[]);
    const typeNm = useMemo(()=>{
        return typeOptions.find((v)=> v.value === type ? true : false)?.name;
    },[type,typeOptions]);
    const selectButtons = useRef<any>();
    function openSelect(){
        if(selectButtons.current){
            selectButtons.current.open();
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
                <SelectAccount>
                    <AccountSpan onClick={openSelect}>{typeNm}</AccountSpan>
                    <SelectButtons buttons={typeOptions} onChange={(v:string)=>{setType(v)}} ref={selectButtons} />
                </SelectAccount>        
                <Category>
                    계정명<InputAccount type="text" value={balanceNm} placeholder="계정명" onChange={(e)=>{setBalanceNm(e.target.value)}} />
                </Category>        
                <Category>
                    잔액<InputCurrency asCssInJs={InputAmount} init={ammount} onChange={(v:string)=>{setAmmount(v)}}/>
                </Category>        
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
    padding : 0px 7%;
    background : white;
    overflow: auto;
    box-sizing: border-box;

    & > div {
        border-bottom: 1px solid black;
        height: 6%;
        font-size: 1rem;
        /* font-weight: bold; */
        display: flex;
        align-items: center;
    }
`;

const SelectAccount = styled.div`
    width: 100%;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        right: 1%;
        height: 0.5rem;
        width: 0.5rem;
        margin-top: 0.4rem;
        border-top: 2px solid ${colorCommonDarkBlue};
        border-right: 2px solid ${colorCommonDarkBlue};
        transform: rotateZ(45deg);
    }
`

const Category = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;

`
const InputAmount = styled.input`
    width: 50%;
    text-align: right;
    outline: 0px solid transparent;
    border : 0px;
    font-size: 1rem;
    `

const InputAccount = styled.input`
    width: 50%;
    text-align: right;
    outline: 0px solid transparent;
    border : 0px;
    font-size: 1rem;
`

const AccountSpan = styled.span`
    font-weight: bold;
    color: ${colorCommonDarkBlue};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
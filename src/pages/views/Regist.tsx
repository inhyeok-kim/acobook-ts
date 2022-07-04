import { useEffect, useState } from "react";
import ButtonCollection from "src/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/style/CommonColor";
import { cssPageHeader } from "src/style/CommonStyles";
import styled from "styled-components"
import {useDispatch, useSelector} from 'react-redux'
import {ButtonOnOff} from 'inhyeok.kim-module.ui/dist/Buttons'
import { HistoryDataDispatch } from "src/redux/reducers/HistoryData";
import {formatCurrency, formatStringToDate} from 'src/utils/FormatUtil';
import InputCurrency from "src/components/InputCurrency";
import { PageInfoDispatch } from "src/redux/reducers/PageInfo";
import BalanceSelect from "src/pages/views/BalanceSelect";
import { RootReducerType } from "src/redux/RootReducer";

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function Regist({action} : PropType){
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
            dom : <h2>지출</h2>,
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

    const selectedAccount = useSelector((state : RootReducerType)=> state.Databus.data);
    useEffect(()=>{
        if(selectedAccount){
            setAccount(selectedAccount);
        }
    }, [selectedAccount]);
    
    const [complete, setComplete] = useState(true);

    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [ammount, setAmmount] = useState('0');
    const [regDate, setRegDate] = useState(formatStringToDate(new Date(),'yyyy-mm-dd',true));
    const [regTime, setRegTime] = useState(formatStringToDate(new Date(),'HH:MM',true));

    function regist(){
        let newHistory : HistoryType;
        newHistory = {
            account : account,
            categoryNm : category,
            amount : parseInt(ammount.replaceAll(',','').replaceAll('₩','')),
            date : new Date(`${regDate.replaceAll('-','/')} ${regTime}`),
            type : "expense",
        }
        dispatch(HistoryDataDispatch.ADD_HISTORY(newHistory));
        action.close();
    }

    function addView(view : Function){
        dispatch(PageInfoDispatch.addView(view));
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
                <SelectAccount onClick={()=>{addView(BalanceSelect)}}>
                    {account}
                </SelectAccount>        
                <Category>
                    <InputCategory type="text" value={category} placeholder="내역명" onChange={(e)=>{setCategory(e.target.value)}} />
                    <div style={{textAlign:"right",width:'60%'}}>
                        <InputCurrency asCssInJs={InputAmount} init={ammount} onChange={(v:string)=>{setAmmount(v)}}/>
                    </div>
                </Category>        
                <RegistDate>
                    <SelectDate>
                        <InputDate type="date" value={regDate} onChange={(e)=>{setRegDate(e.target.value)}} />
                        <InputDate type="time" value={regTime} onChange={(e)=>{setRegTime(e.target.value)}}/>
                    </SelectDate>
                    <CheckComplete>
                        {complete ? 
                            <>완료&nbsp;</>
                            :
                            <>예정&nbsp;</>
                        }
                        <ButtonOnOff initial={complete} option={{width : "45px",onColor:colorCommonDarkBlue}} onChange={(e :any)=>{setComplete(e)}} />
                    </CheckComplete>
                </RegistDate>        
                {/* <Memo contentEditable placeholder="#메모"></Memo>         */}
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
        font-weight: bold;
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
    & input{
        border : 0px;
        font-size: 1rem;
        width: 40%;
        outline: 0px solid transparent;
    }
`

const Category = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
`
const InputCategory = styled.input`
    border : 0px;
    font-size: 1rem;
    width: 40%;
    outline: 0px solid transparent;
`;

const InputAmount = styled.input`
    width: 80%;
    font-size: 1rem;
    text-align: right;
    outline: 0px solid transparent;
    border: 0px;
    border-radius: 0px;
`
const Memo = styled.div`
    width: 100%;
    border-bottom: 0px !important;
    font-weight: normal !important;
    outline: 0px solid transparent;
    
`
const RegistDate = styled.div`
    width: 100%;
    display: flex;
`
const SelectDate = styled.div`
    width: 60%;
`
const CheckComplete = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`

const InputDate = styled.input`
    background: none;
    font-size: 1rem;
    border : 0px;
    color : ${colorCommonDarkBlue};
`;
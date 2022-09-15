import { useEffect, useMemo, useRef, useState } from "react";
import ButtonCollection from "src/old/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/old/style/CommonColor";
import { cssPageHeader } from "src/old/style/CommonStyles";
import styled from "styled-components"
import {useDispatch, useSelector} from 'react-redux'
import {ButtonOnOff} from 'inhyeok.kim-module.ui/dist/Buttons'
import {formatStringToDate} from 'src/utils/FormatUtil';
import InputCurrency from "src/old/components/InputCurrency";
import { PageInfoDispatch } from "src/old/redux/reducers/PageInfo";
import BalanceSelect from "src/old/pages/views/BalanceSelect";
import { RootReducerType } from "src/old/redux/RootReducer";
import { registHistory } from "src/service/HistoryService";
import { DatabusDispatch } from "src/old/redux/reducers/Databus";
import { ReloadDispatch } from "src/old/redux/reducers/Reload";
import SelectButtons from "src/old/components/SelectButtons";

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function Regist({action} : PropType){
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();

    const [type, setType] = useState('expense');
    const typeOptions = useMemo(()=>([
        {
            name : '지출',
            value : 'expense'
        },
        {
            name : '수입',
            value : 'income'
        },
        {
            name : '송금',
            value : 'transfer'
        }
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
    useEffect(()=>{
        setTransferId('');
        setTransferNm('계정선택');
    },[type]);


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
            dom : (<>
                    <h2 onClick={openSelect}>{typeNm}</h2>
                    <SelectButtons buttons={typeOptions} onChange={(v:string)=>{setType(v)}} ref={selectButtons} />
                </>),
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

    const [selectType, setSelectType] = useState('account');
    function selectBalanceView(type:"account"|"transfer"){
        setSelectType(type);
        addView(BalanceSelect)
    }

    const selectedAccount = useSelector((state : RootReducerType)=> state.Databus.data);
    useEffect(()=>{
        if(selectedAccount){
            if(selectType === 'account'){
                setAccount(selectedAccount.id);
                setAccountNm(selectedAccount.nm);
                if(transferId === selectedAccount.id){
                    setTransferId('');
                    setTransferNm('계정선택');
                }
            } else if(selectType === 'transfer'){
                setTransferId(selectedAccount.id);
                setTransferNm(selectedAccount.nm);
                if(account === selectedAccount.id){
                    setAccount('');
                    setAccountNm('계정선택');
                }
            }

            if(selectedAccount.regDate){
                setRegDate(formatStringToDate(selectedAccount.regDate,'yyyy-mm-dd',true));
            }
        }
        dispatch(DatabusDispatch.SET_DATA(null));
    }, [selectedAccount]);
    
    const [complete, setComplete] = useState(true);

    const [account, setAccount] = useState('');
    const [accountNm, setAccountNm] = useState('계좌선택');
    const [category, setCategory] = useState('');
    const [ammount, setAmmount] = useState('0');
    const [regDate, setRegDate] = useState(formatStringToDate(new Date(),'yyyy-mm-dd',true));
    const [regTime, setRegTime] = useState(formatStringToDate(new Date(),'HH:MM',true));
    const [transferId, setTransferId] = useState('');
    const [transferNm, setTransferNm] = useState('계좌선택');

    function regist(){
        // let newHistory : HistoryType;
        // newHistory = {
        //     balanceId : account,
        //     categoryNm : category,
        //     amount : parseInt(ammount.replaceAll(',','').replaceAll('₩','')),
        //     date : new Date(`${regDate.replaceAll('-','/')} ${regTime}`),
        //     type : type as "expense" | "income" | "transfer",
        //     transferId : transferId,
        // }
        // if(type==='transfer'){
        //     newHistory.categoryNm = `${accountNm} -> ${transferNm}`;
        // }
        // registHistory(newHistory).then(()=>{
        //     dispatch(ReloadDispatch.RELOAD());
        //     action.close();
        // });
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
                <SelectAccount onClick={()=>{selectBalanceView("account")}}>
                    {accountNm}
                </SelectAccount>        
                <Category>
                    {
                        type === 'transfer' ? 
                            <SelectTransfer style={{width:'100%',height:'100%'}} onClick={()=>{selectBalanceView("transfer")}}>
                                {transferNm}
                            </SelectTransfer>       
                        :
                            <InputCategory type="text" value={category} placeholder="내역명" onChange={(e)=>{setCategory(e.target.value)}} />
                    }
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

const SelectTransfer = styled.div`
    width: 100%;
    height : 100%;
    display: flex;
    align-items: center;
`

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
    font-size: 0.9rem;
    border : 0px;
    color : ${colorCommonDarkBlue};
`;
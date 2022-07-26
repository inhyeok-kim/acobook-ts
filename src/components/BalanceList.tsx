import styled from "styled-components";
import {cssCommonLi, cssCommonUl}from 'src/style/CommonStyles'
import {colorCommonGreen as green, colorCommonRed as red} from 'src/style/CommonColor'
import { formatCurrency } from "src/utils/FormatUtil";
import ModalConfirm from "./ModalConfirm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BalanceDataDispatch } from "src/redux/reducers/BalanceData";


interface propType {
    list : Array<BalanceType>
    modify : boolean,
    type? : 'asset' | 'debt'
    onClick? : Function
}

export default function BalanceList({
    list,
    modify,
    type = 'asset',
    onClick = ()=>{}
} : propType){

    const [modalShow, setModalShow] = useState(false);
    const [modalOption, setModalOption] = useState({
        alertText : <span>을 삭제하면 거래 내역도 함께 삭제됩니다.<br/>삭제하시겠습니까?</span>,
        confirm : {
            text : '삭제',
            onClick : function(){
                setModalShow(false);
            }
        },
        cancel : {
            text : '취소',
            onClick : function(){
                setModalShow(false);
            }
        }});

    function makeModalOption(balanceNm:string, id:string){
        return {
            alertText : <span>{balanceNm}을 삭제하면 거래 내역도 함께 삭제됩니다.<br/>삭제하시겠습니까?</span>,
            confirm : {
                text : '삭제',
                onClick : function(){
                    deleteBalance(id);
                    setModalShow(false);
                }
            },
            cancel : {
                text : '취소',
                onClick : function(){
                    setModalShow(false);
                }
            }
        };
    }

    function onClickDelete(nm:string, id:string){
        setModalOption(makeModalOption(nm,id));
        setModalShow(true);
    }

    const dispatch = useDispatch();
    function deleteBalance(id:string){
        dispatch(BalanceDataDispatch.DELETE_BALACE(id));
    }

    return (
        <ListWrapper>
            {list.map((v,i)=>{
                return (
                    <List key={i} onClick={onClick? ()=>{onClick({nm : v.balanceNm, id:v.balanceId})}: ()=>{}} >
                        <div className="list_div">
                            <span>{v.balanceNm}</span>
                            <Span as={type === 'asset' ? Asset : Debt}>&#8361; {formatCurrency(v.amount)}</Span>
                        </div>
                        <Button modify={modify} onClick={()=>{onClickDelete(v.balanceNm, v.balanceId!)}}>삭제</Button>
                    </List>
                )
            })}
            <ModalConfirm isShow={modalShow} option={modalOption} requestClose={()=>{setModalShow(false)}}/>

        </ListWrapper>
    )
}

const ListWrapper = styled.ul`
    ${cssCommonUl}
`;

const List = styled.li`
   ${cssCommonLi}
   padding: 0px;
   position: relative;

   div.list_div {
        padding: 5px 0px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: end;
        font-weight: bold;
    }
    & :first-child{
        font-size: 0.9rem;
    }
    & :last-child{
        font-size: 0.8rem;
    }
`

const Span = styled.span``

const Debt = styled.span`
    color: ${red};
    font-weight: bold;
    font-size: 0.9rem !important;
    margin-top: 1px;
`

const Asset = styled.span`
    color: ${green};
    font-weight: bold;
    font-size: 0.9rem !important;
    margin-top: 1px;
`
interface ButtonProps {
    modify : boolean
}
const Button = styled.button`
    position: absolute;
    transition: right 0.3s;
    right : ${(props:ButtonProps) => props.modify ? '0%' : '-30%'};
    border: 0px;
    color: white;
    background-color: ${red};
    border-radius: 1rem;
    width: 15%;
    height: 50%;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

`

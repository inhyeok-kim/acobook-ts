import styled from "styled-components";
import {cssCommonLi, cssCommonUl}from 'src/style/CommonStyles'
import {colorCommonRed as ccr, colorCommonGreen as ccg, colorCommonDarkBlue as ccdb}from 'src/style/CommonColor'

import {formatCurrency, formatStringToDate} from 'src/utils/FormatUtil';

interface propsType {
    list : Array<HistoryType>
    today? : boolean
}

export default function HistoryList( {
    list,
    today
} : propsType){
    return (
        <ListWrapper>
            {list.map((v,i)=>{
                return (
                    <List key={i}>
                        <div>
                            <Category>{v.categoryNm}</Category>
                            <Date>{formatStringToDate(v.date, today ? 'HH:MM' : 'mm월 dd일')}</Date>
                        </div>
                        <div>
                                <Money 
                                    as={v.type === 'income' ? Income : v.type === 'expense' ? Expense : Transfer}
                                >
                                    &#8361;{formatCurrency(v.amount)}
                                </Money>
                        </div>
                    </List>
                )
            })}
        </ListWrapper>
    )
}


/**
 * css in js
 */
const ListWrapper = styled.ul`
    ${cssCommonUl}
`;

const List = styled.li`
    ${cssCommonLi}
    
    div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: bold;

        &:first-of-type{
            align-items: baseline;
            flex-direction: column;
            color : black;
        }

    }
`

const Category = styled.span`
    font-size:0.9rem;
`;

const Date = styled.span`
    font-size:0.8rem;
`;

const Money = styled.span`
    padding : 5px 10px;
    text-align: right;
    color: white;
    border-radius: 5px;
    font-size: 0.9rem;
    padding-top: 7px;
    font-weight: bold;
`;

const Expense = styled.span`
    background-color: ${ccr};
`;

const Income = styled.span`
    background-color: ${ccg};
`; 

const Transfer = styled.span`
    background-color: ${ccdb};
`;   
/**
 * css in js
 */
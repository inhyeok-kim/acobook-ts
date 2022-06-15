import styled from "styled-components";
import {cssCommonLi, cssCommonUl}from 'src/style/CommonStyles'
import {colorCommonGreen as green, colorCommonRed as red} from 'src/style/CommonColor'
import { formatCurrency } from "src/utils/FormatUtil";

interface propType {
    list : Array<BalanceType>
    modify : boolean,
    type? : 'asset' | 'debt'
}

export default function BalanceList({
    list,
    modify,
    type = 'asset'
} : propType){

    return (
        <ListWrapper>
            {list.map((v,i)=>{
                return (
                    <List key={i}>
                        {modify ? <button><span></span></button> : ''}
                        <div>
                            <span>{v.balanceNm}</span>
                            <Span as={type === 'asset' ? Asset : Debt}>&#8361; {formatCurrency(v.amount)}</Span>
                        </div>
                    </List>
                )
            })}

        </ListWrapper>
    )
}

const ListWrapper = styled.ul`
    ${cssCommonUl}
`;

const List = styled.li`
   ${cssCommonLi}
    div {
        width: 50%;
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

const Button = styled.button`
    border: 0px;
    color: white;
    background-color: ${red};
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-size: 2rem;
    padding: 0px;
    display: flex;
    justify-content: center;

    span{
        width: 50%;
        height: calc(50% + 1px);
        border-bottom: 1px solid white;
    }

`

import styled from "styled-components";
import {colorCommonRed as ccr, colorCommonGreen as ccg}from 'src/style/CommonStyles'

export default function HistoryList(){
    return (
        <ListWrapper>
            <List >
                <div>
                    <Category>식비</Category>
                    <Date>4월18</Date>
                </div>
                <div>
                    <Money as={Income}>&#8361;5,000</Money>
                </div>
            </List>
            <List >
                <div>
                    <Category>교통비</Category>
                    <Date>4월18</Date>
                </div>
                <div>
                    <Money as={Expense}>&#8361;50,000</Money>
                </div>
            </List>
        </ListWrapper>
    )
}

const ListWrapper = styled.ul`
    list-style: none;
    padding : 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const List = styled.li`
    width: 90%;
    display: flex;
    background-color: white;
    padding: 5px 0px;
    align-items: center;
    border-bottom : 1px solid lightgray;
    &:first-of-type{
        border-bottom : 1px solid lightgray;
        border-top : 1px solid lightgray;
    }
    div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: end;

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
    font-size:0.9rem;
`;

const Money = styled.span`
    padding : 5px 10px;
    text-align: right;
    color: white;
    border-radius: 5px;
    font-size: 0.9rem;
    padding-top: 7px;
    font-weight: normal;
`;

const Expense = styled.span`
    background-color: ${ccr};
`;

const Income = styled.span`
    background-color: ${ccg};
`;   
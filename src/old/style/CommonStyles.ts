import {css} from "styled-components";
import {colorCommonDarkBlue} from 'src/old/style/CommonColor';

export const cssPageHeader = css`
    width : 100%;
    background: ${colorCommonDarkBlue};
    color : white;
`;

export const cssCommonUl = css`
    list-style: none;
    padding : 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const cssCommonLi = css`
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
`

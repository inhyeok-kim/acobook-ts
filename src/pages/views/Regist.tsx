import { useMemo, useState } from "react";
import ButtonCollection from "src/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/style/CommonColor";
import { cssPageHeader } from "src/style/CommonStyles";
import styled from "styled-components"
import {Views, PageInfoDispatch} from 'src/redux/reducers/PageInfo';
import {useDispatch} from 'react-redux'

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function Regist({action} : PropType){
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();

    const HeaderBtns = useMemo(()=>[
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
                dispatch(PageInfoDispatch.addView(Views.Regist));
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        }
    ],[changeMode]);
    
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
    height: 84%;
    background : white;
    overflow: auto;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${colorCommonDarkBlue};
`;
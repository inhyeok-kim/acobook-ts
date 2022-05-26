import styled from 'styled-components';
import {cssPageHeader, colorCommonDarkBlue as ccdb} from 'src/style/CommonStyles';
import Navigation from 'src/components/Navigation';
import ButtonCollection from 'src/components/ButtonCollection';
import { useMemo, useState } from 'react';

export default function Balance({}){
    const [update,setUpdate] = useState(false);

    const HeaderBtns = useMemo(()=>[
        {
            dom : <span style={{visibility : update ? 'visible' : 'hidden'}}>추가</span>,
            action : function(){
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
            }
        },
        {
            dom : <h2>잔액</h2>,
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
            }
        }
    ],[update]);

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
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
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
    border-top : 1px solid ${ccdb};
`;
import styled from 'styled-components';
import {cssPageHeader, colorCommonDarkBlue as ccdb} from 'src/utils/style/CommonStyles';
import Navigation from 'src/components/Navigation';

const Header = styled.div`
    width : 100%;
    height : 10%;
    ${cssPageHeader}
    color : white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const H2 = styled.h2`
    margin: 0px;
`;
const Body = styled.div`
    width: 100%;
    height: 80%;
    background : white;
    overflow: auto;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${ccdb};
`;

export default function Today({}){
    
    return (
        <>
            <Header>
                <H2>2022 05 25</H2>
            </Header>
            <Body>
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
        </>
    )
}
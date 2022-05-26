import styled from 'styled-components';
import {cssPageHeader, colorCommonDarkBlue as ccdb} from 'src/style/CommonStyles';
import Navigation from 'src/components/Navigation';
import HistoryList from 'src/components/HistoryList';
import { FormatCurrency } from 'src/utils/FormatUtil';
export default function Today({}){
    
    return (
        <>
            <Header>
                <H2>2022 05 25</H2>
            </Header>
            <Body>
                <TotalCount title={'예정'} money={612340} sign={'-'} />
                <HistoryList />
                <TotalCount title={'오늘'} money={1234005} sign={'-'} />
                <HistoryList />
            </Body>
            <Footer>
                <Navigation/>
            </Footer>
        </>
    )
}

interface TotalCountType{
    title : string,
    money : number,
    sign : string,
}
function TotalCount({title, money, sign} : TotalCountType){
    return (
        <div style={{
            width : '100%',
            display : 'flex',
            marginTop : '3%'
        }}>
            <H5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>{title}</H5>
            <H5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}><>{sign} &#8361;{FormatCurrency(money)}</></H5>
        </div>
    )
}

const H5 = styled.h5`
    margin-top : 10px;
    margin-bottom:5px;
    padding-left:25px;
    color:grey;
    width:50%;
    display:inline-block;
`

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
    overflow: scroll;
`;
const Footer = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-top : 1px solid ${ccdb};
`;
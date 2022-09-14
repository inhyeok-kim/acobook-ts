import { useMemo, useState } from "react";
import ButtonCollection from "src/old/components/ButtonCollection";
import Navigation from "src/old/components/Navigation";
import { colorCommonDarkBlue, colorCommonRed } from "src/old/style/CommonColor";
import { cssPageHeader } from "src/old/style/CommonStyles";
import styled from "styled-components"

export default function Category(){
    const [update,setUpdate] = useState(false);
    
    const HeaderBtns = useMemo(()=>[
        {
            dom : <span style={{visibility : 'hidden'}}>추가</span>,
            action : function(){
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            }
        },
        {
            dom : <h2>예산</h2>,
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
                fontSize : '0.9rem',
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
                <div style={{height:'15%',padding:'0px 5%'}}>
                    <div style={{textAlign:"center",height:'30%',display:"flex",justifyContent:"center",alignItems:"center"}}>2022년 6월</div>
                    <div style={{width:'100%',height:'70%',boxSizing:"border-box",paddingBottom:"1%",display:"flex",justifyContent:'space-between',alignItems:"flex-end"}}>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                        <div style={{height:'100%',width:'9%', background:'lightgrey',display:"flex",alignItems:'flex-end'}}>
                            <div style={{height:'50%',width:'100%', background:colorCommonRed}}></div>
                        </div>
                    </div>
                </div>
                <div style={{padding:'0px 5%'}}>
                    <div style={{width:'100%',padding:'2.5% 0px',display:'flex', justifyContent:"space-between",borderBottom:'1px solid black'}}>
                        <span>지출</span>
                        <span><span>1321321</span> / <span style={{color:'red'}}>1233123</span></span>
                    </div>
                    <div style={{borderBottom:'1px solid black',padding:'2% 0px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                        <div style={{boxSizing:'border-box', width:'20%',margin:'2%'}}>
                            <div style={{border:'1px solid black', boxSizing:'border-box',width:'100%'}}>
                                <div style={{paddingTop:'100%'}}></div>
                            </div>
                            <div style={{height : '0.3rem',width:'100%',background:'lightgrey'}}>
                                <div style={{height:'100%',width:'30%',background:colorCommonRed}}></div>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>이름</span>
                                <span style={{width:'100%',fontSize:'0.8rem', fontWeight:'bold' ,color:colorCommonRed, textAlign:"center"}}>10,000</span>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>200,000</span>
                            </div>
                        </div>
                        <div style={{boxSizing:'border-box', width:'20%',margin:'2%'}}>
                            <div style={{border:'1px solid black', boxSizing:'border-box',width:'100%'}}>
                                <div style={{paddingTop:'100%'}}></div>
                            </div>
                            <div style={{height : '0.3rem',width:'100%',background:'lightgrey'}}>
                                <div style={{height:'100%',width:'30%',background:colorCommonRed}}></div>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>이름</span>
                                <span style={{width:'100%',fontSize:'0.8rem', fontWeight:'bold' ,color:colorCommonRed, textAlign:"center"}}>10,000</span>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>200,000</span>
                            </div>
                        </div>
                        <div style={{boxSizing:'border-box', width:'20%',margin:'2%'}}>
                            <div style={{border:'1px solid black', boxSizing:'border-box',width:'100%'}}>
                                <div style={{paddingTop:'100%'}}></div>
                            </div>
                            <div style={{height : '0.3rem',width:'100%',background:'lightgrey'}}>
                                <div style={{height:'100%',width:'30%',background:colorCommonRed}}></div>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>이름</span>
                                <span style={{width:'100%',fontSize:'0.8rem', fontWeight:'bold' ,color:colorCommonRed, textAlign:"center"}}>10,000</span>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>200,000</span>
                            </div>
                        </div>
                        <div style={{boxSizing:'border-box', width:'20%',margin:'2%'}}>
                            <div style={{border:'1px solid black', boxSizing:'border-box',width:'100%'}}>
                                <div style={{paddingTop:'100%'}}></div>
                            </div>
                            <div style={{height : '0.3rem',width:'100%',background:'lightgrey'}}>
                                <div style={{height:'100%',width:'30%',background:colorCommonRed}}></div>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>이름</span>
                                <span style={{width:'100%',fontSize:'0.8rem', fontWeight:'bold' ,color:colorCommonRed, textAlign:"center"}}>10,000</span>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>200,000</span>
                            </div>
                        </div>
                        <div style={{boxSizing:'border-box', width:'20%',margin:'2%'}}>
                            <div style={{border:'1px solid black', boxSizing:'border-box',width:'100%'}}>
                                <div style={{paddingTop:'100%'}}></div>
                            </div>
                            <div style={{height : '0.3rem',width:'100%',background:'lightgrey'}}>
                                <div style={{height:'100%',width:'30%',background:colorCommonRed}}></div>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>이름</span>
                                <span style={{width:'100%',fontSize:'0.8rem', fontWeight:'bold' ,color:colorCommonRed, textAlign:"center"}}>10,000</span>
                                <span style={{width:'100%',fontSize:'0.8rem', textAlign:"center"}}>200,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer>
                <Navigation />
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
    border-top : 1px solid ${colorCommonDarkBlue};
`;
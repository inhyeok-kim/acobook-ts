import ButtonCollection from "src/components/ButtonCollection"
import {colorCommonGradient} from 'src/style/CommonStyles'
import {useDispatch} from 'react-redux'
import {PageInfoDispatch, Pages} from 'src/redux/reducers/PageInfo'
import { useMemo } from "react";
import styled from "styled-components";

export default function Navigation(){
    
    const dispath = useDispatch();
    function goPage(page:string){
        dispath(PageInfoDispatch.goPage(page));
    }
    const menuList = useMemo(()=>[
        {
            dom : 'Today',
            action : function(){
                goPage(Pages.today);
            },
            style : {
                background : 'none',
                padding : '0px',
                border : 'none',
                
            }
        },
        {
            dom : '+',
            style : {
                background : colorCommonGradient,
                padding : '0px',
                fontSize : '2.5rem',
                width : '2.5rem',
                height : '2.5rem',
                color : 'white',
                border : 'none',
                borderRadius : '100%',
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                
            }
        },
        {
            dom : 'Balance',
            action : function(){
                goPage(Pages.balance);
            },
            style : {
                background : 'none',
                padding : '0px',
                border : 'none',
                
            }
        },
    ],[]);

    return (
        <NavigationWrapper>
            <ButtonCollection 
                option={{
                    lineType : 'horizon',
                    space : 'around'
                }} 
                buttons={menuList} />
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.div`
    width: 100%;
    height: 70%;
`;
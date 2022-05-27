import ButtonCollection from "src/components/ButtonCollection"
import {colorCommonGradient} from 'src/style/CommonColor'
import {useDispatch} from 'react-redux'
import {PageInfoDispatch, Pages, Views} from 'src/redux/reducers/PageInfo'
import { useMemo } from "react";
import styled from "styled-components";

export default function Navigation(){
    
    const dispath = useDispatch();
    function goPage(page:Function){
        dispath(PageInfoDispatch.goPage(page));
    }

    function addView(view : Function){
        dispath(PageInfoDispatch.addView(view));
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
            dom : <i className="plus"></i>,
            action: function(){
                addView(Views.Regist);
            }, 
            style : {
                background : colorCommonGradient,
                padding : '0px',
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
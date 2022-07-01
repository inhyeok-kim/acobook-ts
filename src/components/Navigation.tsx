import ButtonCollection from "src/components/ButtonCollection"
import {colorCommonGradient} from 'src/style/CommonColor'
import {useDispatch, useSelector} from 'react-redux'
import {PageInfoDispatch, Pages, Views} from 'src/redux/reducers/PageInfo'
import { useMemo } from "react";
import styled from "styled-components";
import { RootReducerType } from "src/redux/RootReducer";

export default function Navigation(){
    const nowPage = useSelector((state : RootReducerType)=>state.PageInfo.page);
    const dispath = useDispatch();

    function goPage(page:Function){
        dispath(PageInfoDispatch.goPage(page));
    }

    function addView(view : Function){
        dispath(PageInfoDispatch.addView(view));
    }

    const menuList = useMemo(()=>[
        // {
        //     dom : '예산',
        //     action : function(){
        //         goPage(Pages.Category);
        //     },
        //     style : {
        //         background : 'none',
        //         padding : '0px',
        //         border : 'none',
        //         fontSize : '1rem',
        //         color : nowPage == Pages.Category ? 'black' : 'grey',
        
        //     }
        // },
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
            dom : '오늘',
            action : function(){
                goPage(Pages.Today);
            },
            style : {
                background : 'none',
                padding : '0px',
                border : 'none',
                fontSize : '1rem',
                color : nowPage == Pages.Today ? 'black' : 'grey',
            }
        },
        {
            dom : '잔액',
            action : function(){
                goPage(Pages.Balance);
            },
            style : {
                background : 'none',
                padding : '0px',
                border : 'none',
                color : nowPage == Pages.Balance ? 'black' : 'grey',
                fontSize : '1rem',
                
            }
        },
        {
            dom : '설정',
            action : function(){
                goPage(Pages.Balance);
            },
            style : {
                background : 'none',
                padding : '0px',
                border : 'none',
                color : 'grey',
                fontSize : '1rem',
                
            }
        },
    ],[nowPage]);

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
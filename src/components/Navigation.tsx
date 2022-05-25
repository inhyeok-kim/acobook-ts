import ButtonCollection from "src/components/ButtonCollection"
import {useSelector, useDispatch} from 'react-redux'
import {MenuInfoDispatch} from 'src/redux/reducers/MenuInfo'
import {rootReducerType} from 'src/redux/RootReducer'

export default function Navigation(){
    const menuInfo = useSelector((state : rootReducerType)=>state.MenuInfo);
    const dispath = useDispatch();
    function onClick(){
        dispath(MenuInfoDispatch.setMenu('Today'));
    }

    return (
        <ButtonCollection option={{lineType : "horizon"}} buttons={menuList} />
    )
}

const menuList = [
    {
        dom : 'Today',
        action : function(){
            console.log('hi');
        }
    },
    {
        dom : <span>hi</span>,
        action : function(){
            console.log('hi');
        }
    }
]
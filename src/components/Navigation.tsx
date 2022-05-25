import ButtonCollection from "src/components/ButtonCollection"

export default function Navigation(){
    
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
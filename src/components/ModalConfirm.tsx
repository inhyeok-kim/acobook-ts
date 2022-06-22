import { ReactElement} from "react";
import styled from "styled-components";
import Modal from 'src/components/Modal';
import { colorCommonDarkBlue } from "src/style/CommonColor";

interface confirmType {
    alertText : ReactElement | string
    confirm : {
        text : string,
        onClick : Function
    },
    cancel : {
        text : string,
        onClick : Function
    }
}
interface propType {
    option : confirmType
    isShow : boolean
    requestClose : Function
}

function ModalConfirm({ option, requestClose, isShow } :propType){
    
    function renderElement(){
        return (
            <div>
                <TextArea>
                    {option.alertText}
                </TextArea>
                <ButtonContainer>
                    <Button onClick={()=>{option.confirm.onClick()}}>{option.confirm.text}</Button>
                    <Button onClick={()=>{option.cancel.onClick()}}>{option.cancel.text}</Button>
                </ButtonContainer>
            </div>
        )
    }

    return (
        <Modal requestClose={requestClose} isShow={isShow} element={renderElement()} />
    )
};

export default ModalConfirm;

const TextArea = styled.div`
    padding: 20px 20px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`
const Button = styled.div`
    width: 50%;
    border-top: 1px solid ${colorCommonDarkBlue};
    height : 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem !important;
    font-weight: bold;
    color : ${colorCommonDarkBlue};
    &:first-of-type{
        border-right: 1px solid ${colorCommonDarkBlue};
    }
`


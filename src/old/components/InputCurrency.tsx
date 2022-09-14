import {formatCurrency} from 'src/utils/FormatUtil';
import styled, { StyledComponent } from 'styled-components';

interface propType {
    onChange : Function
    init : string
    asCssInJs? : StyledComponent<"input", any, {}, never>
}
export default function InputCurrency({
    onChange,
    init,
    asCssInJs
} : propType){
    return (
        <Input type="text" as={asCssInJs ? asCssInJs : ''} value={init} pattern="\d*" onChange={(e:any)=>{onChange('₩'+formatCurrency(e.target.value.replaceAll('₩','')))}}/>
    )
}

const Input = styled.input`
    
`;
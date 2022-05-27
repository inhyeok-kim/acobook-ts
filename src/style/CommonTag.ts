import styled from "styled-components";
/**
 * 스타일 interface
 */
 interface h5Style {
    align? : string,
}
export const H5 = styled.h5`
    margin-top : 10px;
    margin-bottom:5px;
    padding: 0px 6%;
    color:grey;
    width:100%;
    text-align: ${(props : h5Style) => props.align };
    box-sizing: border-box;
`

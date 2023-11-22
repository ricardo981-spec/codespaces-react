import styled from "styled-components"
import Principal from "./Principal";
import CarouselBootstrap from "./Carrossel";

const CorpoStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 20vh;
    background-color: gray;
`

function Corpo() {

    return (
        <CorpoStyled>
           <CarouselBootstrap />
           <Principal />
        </CorpoStyled>
    )
}
export default Corpo;
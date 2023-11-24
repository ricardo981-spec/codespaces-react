import styled from "styled-components"
import CarouselBootstrap from "./Carrossel";
import CardServicos from "./Principal/CardServicos";
import PesquisaServicos from "./Principal/PesquisaServicos";
import InputPesquisa from "./Principal/InputPesquisa";

const CorpoStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 80vh;
    background-color: gray;
`

function Corpo() {

    return (
        <CorpoStyled>
           <CarouselBootstrap />
           <CardServicos />
           {/* <PesquisaServicos /> */}
           <InputPesquisa />
        </CorpoStyled>
    )
}
export default Corpo;
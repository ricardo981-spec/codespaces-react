import Navegacao from "styled-components"
import Carrossel from "./Carrossel";
import Pesquisa from ".Pesquisa";
import Principal from "./Principal";

const CorpoStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 20vh;
    background-color: blueviolet;
`

function Corpo() {

    return (
        <CorpoStyled>
           <Carrossel />
           <Navegacao />
           <Pesquisa />
           <Principal />
        </CorpoStyled>
    )
}
export default Corpo;
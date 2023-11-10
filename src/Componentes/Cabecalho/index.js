
import styled from "styled-components"
import Logotipo from "./Logotipo";
import Menu from "./Menu";
import Login from "./Login"

const CabecalhoStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 20vh;
    background-color: green;
`

function Cabecalho() {

    return (
        <CabecalhoStyled>
            <Logotipo />
            <Menu />
            <Login />
        </CabecalhoStyled>
    )
}
export default Cabecalho;
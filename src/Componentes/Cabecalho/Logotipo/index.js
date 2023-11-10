import Logo from "/home/codespace/codespaces-react/src/Imagem/Logo.png"
import styled from "styled-components"

const LogotipoStyle = styled.div`
    display:flex;
    img{
        width: 20vw;
    }
`
function Logotipo() {
    return (
        <LogotipoStyle>
            <img src={Logo} alt=""/>
            <h1>
            Manunteção Eletronica
            </h1>
        </LogotipoStyle>
    );
}
export default Logotipo;
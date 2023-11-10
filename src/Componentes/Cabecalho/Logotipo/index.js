import Logo from "/home/codespace/codespaces-react/Imagem/Logo.png"
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
            <img src={Logo}/>
            <h1>
            Consertos Computadores e Celulares
            </h1>
        </LogotipoStyle>
    )
}
export default Logotipo;
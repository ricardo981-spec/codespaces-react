import Login from "/home/codespace/codespaces-react-2/src/Imagem/Login.jpg"
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
            <img src={Login} alt=""/>
        </LogotipoStyle>
    );
}
export default Logotipo;
import Cabecalho from '../src/Componentes/Cabecalho'
import styled from 'styled-components';
import Corpo from './Componentes/Corpo/Corpo.js';

const AppStyled = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  background-color: blue;
`

function App() {
  return (
    <AppStyled>
      <Cabecalho />
      <Corpo />
    </AppStyled>
  );
}
export default App;
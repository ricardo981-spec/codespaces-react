import Cabecalho from './Componentes/Cabecalho';
import styled from 'styled-components';
import Corpo from './Componentes/Corpo';

const AppStyled = styled.div`
  display: flex;
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
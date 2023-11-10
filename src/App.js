import Cabecalho from './Componentes/Cabecalho';
import styled from 'styled-components';

const AppStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color:grey;
`

function App() {
  return (
    <Cabecalho />
  );
}
export default App;
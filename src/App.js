import './App.css';
import imagem1 from "/workspaces/codespaces-react/src/Imagem/imagem1.png"
import imagem2 from "/workspaces/codespaces-react/src/Imagem/imagem2.jpg"
import imagem3 from "/workspaces/codespaces-react/src/Imagem/imagem3.png"

function App() {
  return (
    <header className="App-header">
      <div class="imagem1">
        <img src={imagem1}/>
        <img src={imagem2}/>
        <img src={imagem3}/>
      </div>
      <div className='titulo'>
        <p>Manutenção de Computadores e Celulares</p>
      </div>
      <div class="lista">
        <ul>
          <li>Manuteção de Computadores</li>
          <li>Limpeza</li>
          <li>Compra e Trocas de Peças</li>
          <li>Manuteção de Celulares
          </li>
        </ul>
      </div>
      <div className='imagem2'>
      </div>


    </header>
  );
}

export default App;

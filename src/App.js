import './App.css';
import imagem1 from "/workspaces/codespaces-react/src/imagem/imagem1.png"
import imagem2 from "/workspaces/codespaces-react/src/imagem/imagem2.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="imagem1">
        <img src={imagem1}/>
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
          <img src={imagem2} width="300" height="300"/>
          </div>
      </header>
    </div>
  );
}

export default App;

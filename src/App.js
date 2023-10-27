import './App.css';
import imagem1 from "/workspaces/codespaces-react/src/Imagem/imagem1.png"
import imagem2 from "/workspaces/codespaces-react/src/Imagem/imagem2.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="imagem1">
        <img src={imagem1}/>
        <img src={imagem2}/>
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
    </div>
  );
}

export default App;

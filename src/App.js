import './App.css';
import Logo from "/workspaces/codespaces-react/src/Imagem/Logo.png"
import Login from "/workspaces/codespaces-react/src/Imagem/Login.jpg"
import Logo2 from "/workspaces/codespaces-react/src/Imagem/Logo2.png"

function App() {
  return (
    <header className="App-header">
      <div class="Logo">
        <img src={Logo}/>
        <img src={Login}/>
        <img src={Logo2}/>
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
    </header>
  );
}

export default App;

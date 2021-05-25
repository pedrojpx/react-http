import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import Home from './components/Home/Home'
import PaginaNaoEncontrada from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              {/* O exact aqui serve para o NavLink não colorir este elemento
              sempre que clicar em qualquer coisa, pois o "/" está contido
              em todos os outros */}
              <li><NavLink to="/" exact>Início</NavLink></li> 
              <li><NavLink to="/usuarios">Usuarios Cadastrados</NavLink></li>
              <li><NavLink to="/adicionar">Adicionar Usuários</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          {/* <Switch>
            <Route path="/usuarios"><Usuarios /></Route>
            <Route path="/adicionar"><AdicionarUsuario /></Route>
            <Route path="/"><Home /></Route>
          </Switch> */}
          <Switch>
            {/* vai sempre entrar no primeiro que der match!
             Se eu coloco o path=/ aqui, todas as rotas sempre vão cair nele, 
            pois todas possuem o "/" no nome, para isso não acontecer é preciso
            colocar a "/" como última, de forma que as outras tenham prioridade ou 
            colocar o atributo exact depois do "/"*/}
            <Route path="/" exact><Home /></Route>
            <Route path="/usuarios" ><Usuarios /></Route>
            <Route path="/adicionar" ><AdicionarUsuario /></Route>
            <Route path="*"><PaginaNaoEncontrada /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

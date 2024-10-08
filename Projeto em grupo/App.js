import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SolicitarProdutos from './components/SolicitarProdutos';
import VisualizarEstoque from './components/VisualizarEstoque';
import GerenciarPedidos from './components/GerenciarPedidos';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Estoque</Link>
            </li>
            <li>
              <Link to="/solicitar">Solicitar Produtos</Link>
            </li>
            <li>
              <Link to="/gerenciar">Gerenciar Pedidos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={VisualizarEstoque} />
          <Route path="/solicitar" component={SolicitarProdutos} />
          <Route path="/gerenciar" component={GerenciarPedidos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

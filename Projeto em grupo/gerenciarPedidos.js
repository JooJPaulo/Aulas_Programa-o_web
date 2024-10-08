import React, { useState } from 'react';

const GerenciarPedidos = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, nome: 'Produto A', quantidade: 10, tipo: 'entrada' },
    { id: 2, nome: 'Produto B', quantidade: 5, tipo: 'saída' },
    // Adicione mais pedidos conforme necessário
  ]);

  return (
    <div>
      <h2>Gerenciar Pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.nome}</td>
              <td>{pedido.quantidade}</td>
              <td>{pedido.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GerenciarPedidos;

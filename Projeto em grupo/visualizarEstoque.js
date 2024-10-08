import React from 'react';

const VisualizarEstoque = () => {
  const estoque = [
    { id: 1, nome: 'Produto A', quantidade: 50 },
    { id: 2, nome: 'Produto B', quantidade: 30 },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div>
      <h2>Estoque</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisualizarEstoque;

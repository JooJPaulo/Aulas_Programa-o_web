import React, { useState } from 'react';

const SolicitarProdutos = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para solicitar produtos
    alert(`Produto: ${produto}, Quantidade: ${quantidade}`);
  };

  return (
    <div>
      <h2>Solicitar Produtos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Produto:</label>
          <input 
            type="text" 
            value={produto} 
            onChange={(e) => setProduto(e.target.value)} 
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input 
            type="number" 
            value={quantidade} 
            onChange={(e) => setQuantidade(e.target.value)} 
          />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
};

export default SolicitarProdutos;

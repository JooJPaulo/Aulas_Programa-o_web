let id = 0;
let vetor = [];

let nome = document.getElementById('nome');
let valor = document.getElementById('valor');

function cadastrarVenda() {
    id++;
    
    nome = document.getElementById('nome').value;
    valor = document.getElementById('valor').value;
    valor = parseFloat(valor);
    let desconto = valor * 0.1;
    
    let venda = ({
        id: id,
        nome: nome,
        valor: valor,
        desconto: desconto
    });
    vetor.push(venda);
    console.log(venda);
}

function listarVendas() {
    
}
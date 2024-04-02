function adicionarDespesa() {
    let valor = document.getElementById('valor').value;
    let descricao = document.getElementById('descricao').value;
    let tipo = document.getElementById('tipo').value;
    let despesa = { valor, descricao, tipo };
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    despesas.push(despesa);
    localStorage.setItem('despesas', JSON.stringify(despesas));
    listarDespesas();
}

function listarDespesas() {
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    let listaDespesas = document.getElementById('despesas');
    listaDespesas.innerHTML = '';
    despesas.forEach(despesa => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${despesa.descricao}</td><td>${despesa.valor}</td><td>${despesa.tipo}</td>`;
        listaDespesas.appendChild(row);
    });
}

function adicionarReceita() {
    let valor = document.getElementById('valor').value;
    let descricao = document.getElementById('descricao').value;
    let tipo = document.getElementById('tipo').value;
    let receita = { valor, descricao, tipo };
    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];
    receitas.push(receita);
    localStorage.setItem('receitas', JSON.stringify(receitas));
    listarReceitas();
}

function listarReceitas() {
    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];
    let listaReceitas = document.getElementById('receitas');
    listaReceitas.innerHTML = '';
    receitas.forEach(receita => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${receita.descricao}</td><td>${receita.valor}</td><td>${receita.tipo}</td>`;
        listaReceitas.appendChild(row);
    });
}
function vender() {
    var venda = parseFloat(document.getElementById("venda").value);
    var parcelas = parseInt(document.getElementById("parcelas").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(venda) || venda <= 0 || isNaN(parcelas)){
        resultado.value = "Valor da venda inválido!";
        return;
    } else if (parcelas == 0 || parcelas == 1) {
        venda = venda - (venda * 0.1);
    } else if (parcelas == 2) {
        venda = venda + (venda * 0.05);
    } else {
        venda = venda + (venda * 0.1);
    }

    resultado.value = "Valor da venda: R$ " + venda.toFixed(2);
}

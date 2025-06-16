const estoqueProdutos = [
    {nome : "Camiseta", quantidade: 10},
    {nome : "Calça", quantidade: 5},
    {nome : "Tênis", quantidade: 8},
    {nome : "Jaqueta", quantidade: 3},
    {nome : "Boné", quantidade: 12}
];

for (produto of estoqueProdutos) {
    if(produto.quantidade > 0){
        console.log("Produto: " + "["+ produto.nome + "]" + " disponível.");
    }else if(produto.quantidade === 0){
        console.log("Produto: " + produto.nome + " indisponível.;")
    }
}

const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99, fragil: false},
    {nome:'Impressora', qtde: 2, preco: 649.50, fragil:true},
    {nome:'Caderno', qtde: 4, preco: 27.10, fragil : false},
    {nome:'Lápis', qtde: 3, preco: 5.82, fragil : false},
    {nome:'Tesoura', qtde: 1, preco: 19.20, fragil : true},
]

/* exercicio 01: obtenha todos os produtos do carrinho com atributo fragil == true. */
const produtosFrageis = item => item.fragil == true
const nomesProdutosFrageis = item => item.nome
const precoProdutosFrageis = item => item.preco
const funcional1 = carrinho
            .filter(produtosFrageis)
            .map(nomesProdutosFrageis)
console.log(funcional1)

/* exercicio 02:  obtenha o preço total da compra dos produtos presentes no carrinho.*/
const valorDaCompra = item => item.qtde * item.preco
const auxiliarReduce = (acc, el) => acc + el

const funcional2 = carrinho
                .map(valorDaCompra)
                .reduce(auxiliarReduce)
console.log('O valor total da compra é: R$' + funcional2)

/* exercicio 3: obtenha o preço médio da compra realizada cujos produtos sejam frágeis. */
const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}
const mediaInicial = {qtde:0, total:0, media:0}

const media = carrinho
                .filter(fragil)
                .map(getTotal)
                .reduce(getMedia, mediaInicial)
                .media

console.log(`A média é ${media}!`)
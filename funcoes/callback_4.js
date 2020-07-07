const carrinho = [
    {nome:'Caneta', qtde:10, preco: 7.99},
    {nome:'Impressora', qtde:0, preco: 649.50},
    {nome:'Caderno', qtde:4, preco: 27.10},
    {nome:'Lápis', qtde:3, preco: 5.82},
    {nome:'Tesoura', qtde:1, preco: 19.20},
]
const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0;
const qtdeMenorQueDois = item => item.qtde > 2;

const nomeItensValidos = carrinho
                                .filter(qtdeMenorQueDois)
                                .map(getNome)
console.log(nomeItensValidos)


/*implementação manual de Filter


*/
Array.prototype.meuFilter =  function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomeItensValidos2 = carrinho
                        .meuFilter(qtdeMaiorQueZero)
                        .map(getNome)
console.log(nomeItensValidos2)
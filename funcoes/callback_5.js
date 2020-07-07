const carrinho = [
    {nome:'Caneta', qtde:10, preco: 7.99},
    {nome:'Impressora', qtde:0, preco: 649.50},
    {nome:'Caderno', qtde:4, preco: 27.10},
    {nome:'Lápis', qtde:3, preco: 5.82},
    {nome:'Tesoura', qtde:1, preco: 19.20},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
                        .map(getTotal)
                        .reduce(somar)
console.log(totalGeral)

/*
outra implementação de Filter
*/

/* const numeros = [0,1,2,3,4,5,6]
const total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.info(`${acumulador} total até o momento`)
    console.info(`${numero} valor atual`)
    console.info(`${indice} indice atual`)
    console.info(`${original} array original`)
    return acumulador += numero
},0)
console.warn('acabou')
console.log(total) */

/* implementação de Reduce */
Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i <  this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
        }else{
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

const totalGeral2 = carrinho
                        .map(getTotal)
                        .meuReduce(somar)
console.log("ESTE É O MEU REDUCE: "+totalGeral2)

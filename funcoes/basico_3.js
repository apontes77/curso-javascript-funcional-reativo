// arrow function

const regards = () => console.log('olá mundo!')
regards()

const saudacao = (nome, cumprimento) => "Fala " + nome + "!" + cumprimento
console.log(saudacao('Alexandre', 'blz'))


/* const somar = (array) => {
    let soma = 0
    for (let n of array){
        soma += n
    }
    return soma
} */

const minhapot = (numero1, numero2) => Math.pow(numero1, numero2) 


console.log("O resultado da potência com Arrow Function é : "+minhapot(2,5))
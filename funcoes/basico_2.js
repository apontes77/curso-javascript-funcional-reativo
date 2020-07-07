
const bomDia = function(){
    console.log('bom dia');
}

const boaTarde = function(){
    console.log('boa tarde!')
}

// 1- passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
    else{
        console.log('tenta de novo, mano!')
    }
}

executarQualquerCoisa(boaTarde)
executarQualquerCoisa(potencia(9)(3))

// 2) retornar uma função a partir de outra função
function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

console.log(potencia(3)(4))


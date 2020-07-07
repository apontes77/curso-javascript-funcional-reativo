//somar(3)(4)(5)
//calcular(3)(7)(fn)

const somar = function(j){
    return function(k){
        return function(l){
            return j + k + l
        }
    }
}

console.log(somar(2)(3)(4))

const calcular = function(x){
    return function(y){
        return function(minhafuncao){
            return minhafuncao(x,y)
        }
    }
}

function minhafuncao(x,y){
    return (x * y) /2;
}

console.log(calcular(10)(10)(minhafuncao))
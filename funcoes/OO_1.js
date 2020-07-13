function Produto(nome, preco, desc){
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 25.90, 0.50)
console.log(p1.nome)
console.log('R$ '+p1.precoFinal())
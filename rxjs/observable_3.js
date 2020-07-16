const { Observable } = require('rxjs')

const observable = Observable.create(subscriber =>{
    const numero = 4
    function entre (numero) {
        setTimeout(() => {
            console.log(numero)
            numero++
        }, 200)
        if(numero == 10){
            break
        }
    }
})

observable.subscribe(entre())
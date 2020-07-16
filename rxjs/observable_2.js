const { Observable } = require('rxjs')

const observable = Observable.create(subscriber =>{
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso')

    if(Math.random() > 0.5){
        subscriber.complete()
    }else{
        subscriber.error('Que problema?')
    }
})
observable.subscribe(
        valor => console.log(`Valor: ${valor}`),
        erro => console.log(`Erro: ${erro}`),
        () => console.log('Fim!')
)
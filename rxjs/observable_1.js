const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é usada assim!')
})

promise.then(console.log)

const observable = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('legal, mano!')
    setTimeout(() => {
        subscriber.next('É isso mesmo!!!')
    }, 1000)
})

observable.subscribe(console.log)
observable.subscribe(texto => console.log(texto.toUpperCase()))
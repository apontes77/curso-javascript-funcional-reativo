const { interval } = require('rxjs');

const gerarNumeros = interval(500);

const subscription01 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2,num));
});

const subscription02 = gerarNumeros.subscribe(console.log)

setTimeout(() => subscription01.unsubscribe(), 8000)
setTimeout(() => subscription02.unsubscribe, 6000)



const { from, of } = require('rxjs')

const { last, map } = require('rxjs/operators')

from([1,2,'Ana', false, 'último'])
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi ${v}`)
        )
        .subscribe(function(valor){
            console.log(valor)
        })
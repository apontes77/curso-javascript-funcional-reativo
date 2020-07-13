

function esperarPor(tempo){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}


async function imprimirnaTela(){
    await esperarPor(1500)
    console.log('olá #01')
    
    await esperarPor(1500)
    console.log('olá #02')

    await esperarPor(1500)
    console.log('olá #03')

    await esperarPor(1200)
    console.log('Acabou mano!!!!')
}

imprimirnaTela().then()
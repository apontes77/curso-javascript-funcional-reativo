/* aqui estamos aninhando diversas callbacks
Isto torna o algoritmo extremamente aninhado e de dificil teste e manutenção!
*/

/* setTimeout(()=>{
    console.log('Executando callback....')

    setTimeout(()=>{
        console.log('Executando outra callback, mano!')
        
        setTimeout(()=>{
            console.log('Cara, esta já é a 3ª callback!')
        }, 2000)
    },2000)
},2000) */

/* Agora, vamos inserir as promises para ver a diferença! */
function esperarPor(tempo){
    return new Promise((resolve, reject)=>{
        if(tempo >= 4500){
            setTimeout(()=>{
            console.log('Executando promise, camarada!')
            resolve()
        }, tempo)}
        else{console.log('tenta de novo, mano!')
        reject()
        }      
    })
}

esperarPor(2000)
            .then()
            .catch(console.error)

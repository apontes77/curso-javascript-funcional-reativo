

function fazRequisicao(resolver = true){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!resolver){
                reject("Promise rejeitada!")
            }
            resolve("Promise resolvida")
        },5000);
    })
}

fazRequisicao(true)
        .then(console.log)
        .catch(console.error)


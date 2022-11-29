//usando let em loop

for(let j = 0 ; j<10; j++){
    console.log(j)
}

 //console.log('j =',j) vai dar errado pois 'j' é let , let so tem valor la dentro do escopo , fora não

 //usando let agora

const funcs = []

for (let i = 0; i < 10;i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
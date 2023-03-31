function simples(x,y,z){
     let resultado = x+ x*y*z
     console.log(resultado)
}

function composto(x,y,z){
    let resultado = x*(1+y)**z
    console.log(resultado)
}

simples(100,10/100,2)
composto(100,10/100,2)
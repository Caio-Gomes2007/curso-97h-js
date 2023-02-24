const obj = {
    a: 1,
    b: 2,
    c:3,
    soma(){
        return a +b+c
    }
}
console.log(JSON.stringify(obj))//gerou um texto com o objeto , note que a função foi excluida pois texto não e executavel

console.log(JSON.parse('{"a": 1 , "b": 2 , "c": 3 }')) //objeto gerado apartir de um texto
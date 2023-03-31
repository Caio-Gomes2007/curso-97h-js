//simulação de objeto para array

const quaseArray = {
    0:'rafael',
    1:'ana',
    2:'bia'
}
console.log(quaseArray)
Object.defineProperty(quaseArray,'toString',{
    value:function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['rafael','ana','bia']
console.log(quaseArray.toString(),meuArray)

//tudo isso so pra simular um array , mas nao e pra usar e so uma simulação

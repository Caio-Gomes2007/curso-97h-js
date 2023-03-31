console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola rzl'.reverse())

Array.prototype.first=function(){
    return this[0]
}
console.log([1,2,2,3,1,3,34,3,43,4,3].first()) //nos da o primeiro item 
console.log(['a','b','c'].first())

String.prototype.toString = function(){  //reescrvendo a função de toString que ja possuo função padrao
    return ' lascou tudo'
}
console.log('escola rzl'.reverse())//da como errado e fica reverse de 'lascou tudo'
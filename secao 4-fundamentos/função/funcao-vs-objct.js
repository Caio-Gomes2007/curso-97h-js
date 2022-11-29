// ja falamos que object e uma função , mas um novo object e dado como objeto nao como function

console.log(typeof Object) 
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class produto {} 
console.log(typeof produto)
console.log(typeof new produto)
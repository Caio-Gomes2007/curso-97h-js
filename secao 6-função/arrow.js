let dobro = function(a){
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}
dobro = a => 2*a  //o return e implicito

dobro(5)
console.log(dobro(5))

let ola = function (){
    return ' olá'
}
ola = () => ' ola'

console.log(ola())
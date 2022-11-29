{ 
    {
         {
             var sera = 'sera??' //var global , evitar criar pois , qualquer sobre escrita nesse objeto pode causar erros graves
         }
    }
}
console.log(sera)

function teste(){
    var local = 123
}
teste()
//console.log(local) exemplo de error , por ser function ele impede que a variavel exista fora da function

var numero = 1 //var global
{
    var numero = 2 //alterando a var global
    console.log('dentro == '+numero)
}
console.log('fora == '+numero)


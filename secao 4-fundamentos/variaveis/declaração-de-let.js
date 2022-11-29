let  numero = 1  /*let pode ser declarado mais de uma vez , pois o valor dele e com 
base em qual escopo ele esta , ou seja , fora o valor dele e 1 , dentro e 2 */
{
   let numero = 2 
    console.log('dentro == '+numero)
}
console.log('fora == '+numero)
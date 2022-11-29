/**
 tabela verdade
 
 
 v e v -> v 
v e f -> f 
f e ? -> f

op1 e op2 e op3 e op4 -> //se algum deles for falso , a resposta e falso utilizando o operador 'e(&&)

ou == ||

v ou f -> v
f ou v -> v
f ou f -> 

xor == ou exclusivo 

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

negação logica !

!v -> f
!f -> v
*/

function compras(trab1,trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTV50 = trab1 && trab2
    const comprarTv32 = trab1 != trab2
    const manterSauldavel = !comprarSorvete
    return { comprarSorvete,comprarTV50,comprarTv32,manterSauldavel}
}
console.log(compras(true,true))
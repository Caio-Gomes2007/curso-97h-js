//mecanismo de tratamento de erro

function tratarErroLancar(erro){
   // throw new erro('...')
   // throw 10
   //throw true
   // throw 'mensagem'
    throw{
        nome:erro.name,
        msg:erro.message,
        date: new Date
    }
}



function imprimirNomeGritado(obj){ //o try e utilizando quando se acha que pode ocorrer um erro 
    try{                           //e o cath vem junto como se fosse um plano B ,tipo else
        console.log(obj.name.toUpperCase()+ '!!!') 
    }catch (e){
        tratarErroLancar(e)
    }finally {
        console.log('final')
    }
}

const obj = {nome:'roberto'}
imprimirNomeGritado(obj)
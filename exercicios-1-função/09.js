function aluno(nota){
    
    
    
       
    
    let corrigirnota = function (nota){
        if( nota % 5 > 2){
            return + (5+( nota % 5))
        }else{
            return nota
        }
    }
    
        if( corrigirnota >= 40){
            console.log('passou')
        }else{
            console.log('não passou')
        }

    }




aluno(100)
aluno(38)
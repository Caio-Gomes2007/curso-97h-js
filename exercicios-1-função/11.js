function AnoBissexto(ano){
    let AnoBissextoTalzez = ano/4
    if(Number.isInteger(AnoBissextoTalzez) ){
        console.log('É ano bissexto')
    }else{
        console.log('Não é ano bissexto')
    }
}

AnoBissexto(2020)
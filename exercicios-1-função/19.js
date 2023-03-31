function venda(codigo,quantidade){
    switch(codigo){
        case 100: 
            return quantidade *3
        break;
        case 200:
            return quantidade * 4
        break;   
        case 300: 
            return quantidade *5.50
        break;
        case 400:
            return quantidade*7.50
        break;
        case 500:
            return quantidade*3.50
        break;
        case 600:
            return quantidade*2.80
        break;
        default:
            return 'erro'
    }
}

console.log(venda(100,2))

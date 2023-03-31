function extenso(n){
    switch (n) {
        case 0 :
            return 'zero'
        break;
        case 1:
            return 'um'
            break;
        case 2:
            return 'dois'
            break;
        case 3:
            return 'três'
            break;
        case 4:
            return 'quatro'
            break;
        case 5:
            return 'cinco'
            break;
        case 6:
            return 'sexto'
            break;
        case 7:
            return 'setimo'
            break;
        case 8:
            return 'oitavo'
            break;
        case 9:
            return 'nove'
            break;
        case 10:
            return 'dez'
            break;
        default:
            return 'erro'
            break;
    }
} 

console.log(extenso(1))
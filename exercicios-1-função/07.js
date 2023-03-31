function formula(ax2,bx,c){
        let delta = (bx **2) - (4*ax2*c)
        if(delta<0){
            console.log('delta menor que  zero')
        }
        let x1 = (-bx - Math.sqrt(delta))/(2*ax2)
        let x2 = (-bx + Math.sqrt(delta))/(2*ax2)

        console.log(x1,x2)
}

formula(2,9,7)
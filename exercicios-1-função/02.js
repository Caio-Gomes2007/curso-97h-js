function triangulo(a, b, c) {
   if (a === b && b === c) {
      return 'Equilátero';
   } else if (a === b || a === c || b === c) { 
      return 'Isósceles';
   } else {
      return 'Escaleno';
   }
}

console.log(triangulo(3, 3, 3));


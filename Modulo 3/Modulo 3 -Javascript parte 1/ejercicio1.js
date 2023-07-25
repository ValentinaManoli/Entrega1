const metros = parseInt(prompt('Ingrese la cantidad de metros:', ''));
// const num2 = parseInt (prompt('Ingrese segundo numero', ''));
//const num3 = parseInt (prompt('Ingrese tercer numero', '')); 

if (metros <= 1000 ) {
    document.write('Pie')    
} else if (metros > 1000 && metros <= 10000){
   document.write('Bicicleta');
} else if (metros > 10000 && metros <= 30000){
    document.write('Colectivo')
} else if (metros > 30000 && metros <= 100000){
    document.write('Auto')
} else if (metros > 100000){
    document.write('Avión')
}


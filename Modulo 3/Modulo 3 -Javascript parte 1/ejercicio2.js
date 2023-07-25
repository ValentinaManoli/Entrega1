const num1 = parseInt(prompt('Ingresar primer numero', ''));
const num2 = parseInt(prompt('Ingresar segundo numero', ''));
const num3 = parseInt(prompt('Ingresar tercer numero', ''));
const num4 = parseInt(prompt('Ingresar cuarto numero', ''));
const numeros = [num1, num2, num3, num4]; 

console.log(numeros);
console.log(numeros.lenght);

if (Number.isNaN (numeros)){
    document.write ('Porfavor, ingrese un número entero')
}

for (let i = 0; i < numeros.lenght; i++){
    if (num1 > num2 && num1 > num3){
        document.write ('El mayor es el ${num1}')
    } else if (num2 > num3 && num2 > num4) {
        document.write ('El mayor es el ${num2}')
    } else if (num3 > num4){
        document.write('El mayor es el ${num3}')
    } else {
        document.write ('El mayor es el ${num4}')
    }
    
} 












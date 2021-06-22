/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/
//Funciones
/*function add(a: number, b: number): number{
 return a + b;
}*/

//const total = add(8, 9);
//const total2 = add('Josué', 'Cando');


//Funcion de flecha - con retorno explícito
/*const addArrow = (a: number, b:number): number => {
    return a + b;
}*/

//console.log(total);
//console.log(total2);

//Otro tipo de argumentos 
function multiply( number: number, anotherNumber?: number, base: number = 2): number{
    return number * base;
}

const result = multiply(10, 20);
const result2 = multiply(10, 0, 2);
const result3 = multiply(10, 20);

console.log(result, result2, result3);
/*
    ===== Código de TypeScript =====
*/
//Genéricos
//Función para identificar el tipo
function whatKindAmI<T>(argument: T) {
  return argument;
}
let iAmAString = whatKindAmI("Hello world");
let iAmANumber = whatKindAmI(100);
let iAmAnArray = whatKindAmI([1,2,3,4,5,6,7,8,9,0]);

let imAExplicit = whatKindAmI<number>(650);
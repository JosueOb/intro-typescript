/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/

//Arreglos

//let skills: any[] = [1, 'JosueOb', true, [], {}];//se debe evitar la flexibilidad de los valores aceptados
//let skills: string[] = ["Bash", "Counter", "Healing"];
//let skills = ['Bash', 'Counter', 'Healing'];// en caso de no especificar el tipo, TypeScript lo infiere
//let skills: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing', 100];// declaración de varios tipos de datos para los items del arreglo, evitar realizar esto

//skills.push("Programmer");
//skills.push(true);
//skills.push(1);
//console.log(skills);

//Objetos - interfaces

interface Person {
    name: string,
    hp: number,
    skills: string[],
    city?: string //propiedad opcional
} 


const person: Person = {
    name: 'Josue',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

person.city = 'Quito';

console.table(person);
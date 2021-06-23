/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/
//Desestructuración de arreglos
//const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

/*console.log('Person 1:', dbz[0]);
console.log('Person 2:', dbz[1]);
console.log('Person 3:', dbz[2]);*/

//const [ person1, person2, person3] = dbz;
//const [, , person3] = dbz;

//console.log('Person 1:', person1);
//console.log('Person 2:', person2);
//console.log("Person 3:", person3);

const dbz: (string | string[])[] = [
  "Goku",
  "Vegeta",
  "Trunks",
  ["Serie", "Animation"],
];

const [p1, p2, p3, details] = dbz;
const [t1, t2] = details;

console.log('Person 1:', p1);
console.log('Person 2:', p2);
console.log('Person 3:', p3);
console.log('Type 1:', t1);
console.log('Type 2:', t2);
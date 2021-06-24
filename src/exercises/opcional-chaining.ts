/*
    ===== Código de TypeScript =====
*/
//Encadenamiento opcional
//pasajero
interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'JosueOb'
}

const passenger2: Passenger = {
    name: "Ricardo",
    children: ['Ariel', 'Santiago']
}

function showChildern (passenger: Passenger): void{
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

showChildern(passenger2);
showChildern(passenger1);
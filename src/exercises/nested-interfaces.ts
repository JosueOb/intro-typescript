/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/
//Tarea sobre objetos e interfaces
//Interfaz para que contenga un objeto anidado
/*interface SuperHero {
    name: string;
    age: number;
    address: {
        street: string,
        contry: string,
        city: string,
    };
    showAddress: () => string;
}*/

interface Address {
    street: string;
    contry: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHero: SuperHero = {
    name: "Spiderman",
    age: 30,
    address: {
        street: "Main St",
        contry: "USA",
        city: "NY",
    },
    showAddress(){
        return this.name + ", "+this.address.city+", "+this.address.contry;
    }
}

const address = superHero.showAddress();
console.log(address);
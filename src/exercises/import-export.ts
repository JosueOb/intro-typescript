import { calculateISV, Product } from './argument-destructuring';
/*
    ===== Código de TypeScript =====
*/
//Importaciones y exportaciones

const shoppingCart: Product[]  = [
    {
        description: 'Phone One',
        price: 150 
    },
    {
        description: 'Phone Two',
        price: 250 
    }
]

const [total, isv] = calculateISV(shoppingCart);

console.log('Total:', total);
console.log('ISV:', isv);
/*
    ===== Código de TypeScript =====
*/
//Desestructuración de argumentos en una función
export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung Galaxy A70",
  price: 250,
};

const tablet: Product = {
  description: "Samsung Note 10",
  price: 450,
};

//Calcular el impuesto sobre venta
export function calculateISV(products: Product[]): [number, number] {
  let total = 0; //no es constante porque más adelante se lo va a cambiar
  //el foreach tiene como parametros a cada elemento del array, el index y al arreglo completo (products)
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

/*const articules: Product[] = [phone, tablet];

//const isv = calculateISV(articules);

const [total, isv] = calculateISV(articules);

console.log("Total:", total);
console.log("ISV:", isv);*/

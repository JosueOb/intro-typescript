/*
    ===== Código de TypeScript =====
*/
//Clases básicas
class Heroe {
  alterEgo: string;
  age: number;
  realName: string;
  showName() {
    return this.alterEgo + " " + this.realName;
  }
}

interface HeroInter {
  alterEgo?: string;
  age?: number;
  realName?: string;
  showName?: ()=> string;
}

const iroman = new Heroe();
const spiderman: HeroInter = {};
console.log(iroman);

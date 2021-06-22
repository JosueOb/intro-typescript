/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/
//Interface
interface Character {
  name: string;
  pv: number; //puntos de vida
  showHp: () => void;
}

//Función para curar un personaje
function heal(character: Character, healX: number): void {
  character.pv += healX;
  console.table(character);
}

const newPerson: Character = {
  name: "JosueOb",
  pv: 50,
  showHp() {
    console.log('Los puntos de vida del personaje son:',this.pv);
  },
};

heal(newPerson, 25);
newPerson.showHp();

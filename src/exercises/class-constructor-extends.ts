/*
    ===== Código de TypeScript =====
*/
//Constructor de una clase
/*class Hero {
  public alterEgo: string;
    public age: number;
    public realName: string;

  constructor(alterEgo: string,age: number) {
    this.alterEgo = alterEgo;
        this.age = age;
  }
}*/
//Forma común de observar el constructor en las clases
class NormalPerson {
  constructor(public name: string, public address: string) {}
}

//Extender la clase
class Hero extends NormalPerson{
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
      super( realName, 'New York');
  }
}

const batman = new Hero("Batman", 35, "Bruce Wayne");
console.log(batman);

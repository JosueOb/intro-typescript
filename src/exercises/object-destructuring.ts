/*
    ===== Código de TypeScript =====
    Objetos, arreglos e interfaces
*/
//reproductor, como un reporductor de música
interface Player {
    volume: number;//volumen
    seconds: number;//segundos
    song: string;//canción
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    seconds: 36,
    song: "Mess",
    details:{
        author: "Ed Sheeran",
        year: 2015,
    }
}

const author = "JosueOb";
//Desestructuración del objeto
const { volume, seconds, song, details:{author: authorDetail, year} } = player;

//const { author, year} = details;

console.log('The current volume is:', volume);
console.log('The current seconds is:', seconds);
console.log('The current song is:', song);
console.log('The current actor is:', authorDetail);
console.log('The current year is:', year);


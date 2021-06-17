const age:number = 18;
enum Gender {
  BOY,
  GIRL
}
console.log(Gender.BOY,Gender[0]);
console.log(Gender.GIRL,Gender[1]);

const enum Colors {
  RED,BLUE,YELLOW
}
const myColor = [Colors.RED, Colors.BLUE, Colors.YELLOW]

function fn(x:number | string) {
  if (typeof x === 'number') {
    console.log(x);
  } else if (typeof x === 'string') {
    console.log(x);
  } else {
    console.log(x); // never
  }
}
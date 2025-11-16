const elements = ['🦍', '🐕', '🫎', '🦌'];

for (let i = 0; i < elements.length; i++) {
    console.log(`Index: ${i} element: ${elements[i]}`);
}
console.log(elements);

let n = 3;

while (n < 9) {
    console.log(`${n}`);
    n = n + 3;
}
console.log(n); // 9, dlatego ponieważ warunek w while jest już fałszywy <9 a nie <=9

console.log('--- do while ---');

do {
    console.log(n);
    n = n + 3;
} while (n < 15);

// pętla for in - iteracja po właściwościach obiektu
const deathStar = {
    diameter: 1200000,
    fire: (target) => {
        console.log(`${target} destroyed💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'Darth Vader'
    }
}
// pętla for in - iteracja po właściwościach obiektu
for (property in deathStar) {
    console.log(`${property}: ${deathStar[property]} `)
}

// pętla for of --- itracja po wartościach iterowalnych (tablice, łańcuchy znaków itp)
for (element of elements) {
    console.log(elements);
}   //wyświetli 4 razy całą tablicę elements, ponieważ w pętli for of zmienna 
// element przyjmuje kolejno wartości z tablicy elements, 
// a w konsoli jest wywoływana cała tablica elements. 
// Gdybyśmy chcieli wyświetlić poszczególne elementy tablicy, 
// to powinniśmy w konsoli wpisać console.log(element);
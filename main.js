const firstName = "Jan Repel";
const age = 25; 

console.log(`Mam na imie ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

console.log(header)

const contentJs = document.querySelector('.my-article_content--js')

contentJs.innerHTML = 'jestem javascriptem'

const calculate = myNumber => (myNumber+4)*7

console.log(calculate(2));

const result = calculate(1);
console.log(result);

function hello() {
    console.log('hello')
}

hello();

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

console.log(deathStar.isOperating);
console.log(deathStar.commander.name);
console.log(deathStar.name);

deathStar.fire('Aldebaran');
deathStar.fire('Zebra');

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


const greet = (name, age) => {
    const result = `Witaj ${name}! masz ${age} lat`;
    return result;
}

const greeting = greet('Jan', 25);

console.log(greet('Jan', 25));
console.log(greeting);


if('javasctip' != 'Java') {
    console.log('JS to nie java')
}

if('javasctip' > 'Java') {
    console.log('JS jest dluzsze')
}

if('2' === 2) {
    console.log('to jest flasz wiec sie nie wyswietli')
}
if('2' == 2) {
    console.log('to jest prawda  wiec sie wyswietli - nie sprawdza typeof i pomimo ze to string a drugie to number to bezz znaczenia')
}

if(2==='2') {
    console.log('to jest prawda');
} else {
    console.log('to jest falsz');
}

let isGotuje = true;

if (isGotuje){
    console.log('to jest prawda');
} else {
    console.log('to jest falsz');
}
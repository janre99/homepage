import { calculate, myFavouriteColour } from "./calculate";
import * as nowaNazwa from "./calculate"
import { differenceInDays } from "date-fns";
import { hardware } from "./arrays.js";

console.log(hardware[2]);

const resultDay = differenceInDays(
  new Date(2025, 10, 26, 0, 0),
  new Date()
)
console.log(resultDay);

console.log(nowaNazwa.calculate(2));

const firstName = "Jan Repel";
const age = 25; 

console.log(`Mam na imie ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

console.log(header)

const contentJs = document.querySelector('.my-article_content--js')

contentJs.innerHTML = 'jestem javascriptem'



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

const button = document.querySelector('.page-header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--backgroundColor', 'tomato');
})


const hamburger = document.querySelector('.hamburger--js');
console.log(hamburger);

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})
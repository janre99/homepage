const firstName = "Jan Repel";
const age = 25; 

console.log(`Mam na imie ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

header.innerHTML = `Mam na imie ${firstName} i mam ${age} lat`
console.log(header)

const contentJs = document.querySelector('.my-article_content--js')

contentJs.innerHTML = 'jestem javascriptem'
const humanOne = {
    name: 'Jan',
    age: 25,
    address: {
        street: 'Warszawska',
        city: 'Kraków',
    }
}

const humanTwo = {
    name: 'Zygmunt',
    age: 25,
    address: {
        street: 'Lipowa',
        city: humanOne.address.city,
    }
}

console.log(humanOne);
console.log(humanTwo);

humanOne.address.city = 'Warszawa';

console.log(humanOne);
console.log(humanTwo);



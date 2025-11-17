const myObject = {
    name: "Jan",
    age: "25",
    hi: () => {
        console.log("hi")
    },
    hobby: ["f1", "basketball", "programming"], 
}

console.log(JSON.stringify(myObject));

const myJSON = JSON.stringify(myObject);
console.log(myJSON.name); // undefined, ponieważ myJSON jest łańcuchem znaków, a nie obiektem

const myParsedObject = JSON.parse(myJSON);
console.log(myParsedObject.name); // Jan, ponieważ myParsedObject jest już obiektem.
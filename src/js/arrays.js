export const hardware = ['mouse', 'keyboard', 'monitor', 'printer', 'scanner'];


const myText = "to jest jakis tekst";
const textLength = myText.length;

console.log(myText[myText.length - 1]);

const myObject = {
    lastName: 'Kowalski',
    age: 30,
}

hardware.push(myObject);
hardware.push(myObject);
hardware.push(myObject);

console.log(hardware);

hardware.unshift('laptop'); /*to dodaje na poczatek tablicy*/
console.log(hardware);
hardware.shift(); /*to usuwa z poczatku tablicy*/
console.log(hardware);

hardware.pop(); /*to usuwa z konca tablicy*/
console.log(hardware);

console.log(hardware.indexOf(myObject)); /*zwraca index podanego elementu w tablicy*/

console.log(hardware.includes('monitor')); /*zwraca true lub false czy dany element jest w tablicy*/   


console.log(hardware.indexOf('printer')); /*zwraca index podanego elementu w tablicy*/

if(hardware.indexOf('asdasd') >= 0){
    console.log("znalazlem printer w tablicy");
} else {
    console.log('nie znalazlem printer w tablicy');
}
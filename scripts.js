
let name = "Kody Peters";
let age = 27;
let birthday = "October 8";
let detroitGC = true;
let lifeEvents = ["I was born in Saint Johns, MI", "I graduated from Michigan State", "I spent a month in India", "I was a professional youth archer"];

if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}
let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;
while (true){
    if (randomNumber !== 5){
        counter++;
        console.log(`${randomNumber} !== 5`);
        randomNumber = Math.ceil(Math.random() * 10);
    } else {
        counter++;
        console.log(`5 === 5! It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}
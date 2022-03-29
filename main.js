let userName = 'Jill';
  if (userName) {
    console.log(`Hello ${userName}!`);
  } else {
    console.log('Hello!!');
  }
let userQuestion = 'Will I live to see another day?';
    console.log(`Will you live to see another day, you ask??`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
    console.log('The great and powerful magic EightBall says:');

if (randomNumber === 0) {
  console.log('"It is certain"');
} else if (randomNumber === 1) {
  console.log('"It is decidedly so"');
} else if (randomNumber === 2) {
  console.log('"Reply hazy, try again!"');
} else if (randomNumber === 3) {
  console.log('"Cannot predict now"');
} else if (randomNumber === 4) {
  console.log('"Do not count on it"');
} else if (randomNumber === 5) {
  console.log('"My sources say no!"');
} else if (randomNumber === 6) {
  console.log('"Outlook not so good"');
} else if (randomNumber === 7) {
  console.log('"Signs point to yes"');
};
console.log(eightBall);

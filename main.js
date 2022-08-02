var userName = 'Jane';
if (userName === 'Jane') {
    console.log(`Hello, ${userName}.`)
} else {
    console.log('Hello!');
};
const userQuestion = 'will i become a software engineer?';
console.log(` ${userName} has asked ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
var eightBall = '';
switch(randomNumber){
case 0: 
eightBall = 'it is decidedly so';
break;
case 1:
eightBall = 'it is certain';
break;
case 2: 
eightBall = 'reply hazy, try again';
break;
case 3: 
eightBall = 'cannot predict now';
break;
case 4:
eightBall = 'do not count on it';
break;
case 5:
eightBall = 'my sources say no';
break;
case 6:
eightBall = 'outlook not so good';
break;
case 7:
eightBall = 'signs point to yes';
break; 
}
console.log(`The magic 8 Ball says: ${eightBall}`);

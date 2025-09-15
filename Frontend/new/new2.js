// console.log("Hello World");

// num=11;
// str="Hello";
// bol=true;
// bigInt=1234567890123456789012345678901234567890n;
// undef=undefined;
// nul=null;

// //var, let, const

// var a=10;
// console.log(a);
// var a=20;
// console.log(a); //this is correct, we can redeclare and reassign



// let b=10;
// console.log(b);

// //let b=20; //error
// //console.log(b);

// b=20;
// console.log(b); //this is correct now, we can reassign but cannot redeclare

// const c=10;
// console.log(c);

// //const c=20; //error
// //console.log(c);
// //c=20; //error
// //console.log(c); //this is incorrect, we cannot redeclare and reassign



// //functions

// function welcomeMessage(name){
//     return "Welcome "+name;
// }

// console.log(welcomeMessage("Ashraf"));

// function myDetails(name, rollno, branch, course){
//     return "Name : " +name + "\nRoll No : " +rollno+ "\nBranch : " +branch + "\nCourse : " +course;
// }

// console.log(myDetails("Ashraf", "234G1A3311", "CSE", "Full Stack Web Development"));


// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add("Hello ","World"));
// console.log(add("10","20"));
// console.log(add(10,"20"));

// function add(a,b){
//     a=15;
//     b=15;
//     return a+b;
// }
// console.log(add(10,30));


// function area(a,b){
//     return a*b;
// }

// a=10;
// b=10;
// console.log(area(a,b));

// function fact(m){
//     if(m==0 || m==1){
//         return 1;
//     }
//     else{
//         return m*fact(m-1);
//     }
// }

// let m=4;
// console.log(fact(m));


//arithmetic operators
// let a=10;
// let b=20;
// function calculator(a,b){
//     console.log("Addition : "+(a+b));
//     console.log("Subtraction : "+(a-b));
//     console.log("Multiplication : "+(a*b));
//     console.log("Division : "+(a/b));
// }
// calculator(a,b);

// calculator(2,3);


//compound interest
// let p=1000;
// let r=10;
// let t=2; 
// function compoundInterest(p,r,t){
//     let amount = p * (Math.pow((1 + r / 100), t));
//     let ci = amount - p;
//     return ci;
// }
// compoundInterest(p,r,t);
// console.log("Compound Interest : "+compoundInterest(p,r,t));


//if condition
// if(age>=18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }
// age = 21;

//caluculator using if condition
// let a = 6;
// let b = 2;
// function calculator(a,b,operator){
//     if(operator=="+"){
//         return a+b;
//     }
//     else if(operator=="-"){
//         return a-b;
//     }
//     else if(operator=="*"){
//         return a*b;
//     }
//     else if(operator=="/"){
//         return a/b;
//     }
//     else{
//         console.log("Invalid operator");
//     }
// }
// console.log(calculator(a,b,+));
// console.log(calculator(a,b,-));
// console.log(calculator(a,b,*));

//grade marks
// let marks = 75;
// if(marks>90 && marks<=100){
//     console.log("Grade A");
// }
// else if(marks>80 && marks<=90){
//     console.log("Grade B");
// }
// else if(marks>70 && marks<=80){
//     console.log("Grade C");
// }
// else if(marks>60 && marks<=70){
//     console.log("Grade D");
// }
// else if(marks>50 && marks<=60){
//     console.log("Grade E");
// }
// else{
//     console.log("Fail");
// }


// let a = 6;
// let b = 2;
// operator="*"
//     if(operator=="+"){
//         return a+b;
//     }
//     else if(operator=="-"){
//         return a-b;
//     }
//     else if(operator=="*"){
//         return a*b;
//     }
//     else if(operator=="/"){
//         return a/b;
//     }
//     else{
//         console.log("Invalid operator");
//     }

//8040
//a person is travelling from A to B at a speed of 30kmph, speed will be doubled for every 10 minutes, calculate the distance max speed 120 travelled 96mins




//a div b x speed then minus time
// let speed = 30;
// let dis=0;
// let max_speed=120;
// let travel = 96;
// for(speed=30;speed<=max_speed;speed++){
//     if()
// }


//assignment 1
// let initialSpeed = 30; 
// let maxSpeed = 120;    
// let totalTime = 96;    
// let interval = 10;   
// let distance = 0;
// let currentSpeed = initialSpeed;
// let timeLeft = totalTime;
// if()
// while (timeLeft > 0) {
//     let timeAtCurrentSpeed = Math.min(interval, timeLeft);
//     distance += (currentSpeed * timeAtCurrentSpeed) / 60; 
//     timeLeft -= timeAtCurrentSpeed;
//     currentSpeed = Math.min(currentSpeed * 2, maxSpeed); 
// }
// console.log("Total Distance Travelled: " + distance + " km");        



// the basic pay of auto is 30rs for 4km, for the next 5kms the price is 10rs per km, for the next 10kms price is 15rs for more kms the price is 20rs per km, user travelled 19.5 kms, what will be the price


// if(dis<=4){
//     price=30;
//     else if(dis>4 && dis<=9){
//         price=30+((dis-4)*10);
//     }
//     else if(dis>9 && dis<=19){
// }


//assignment 2
// let distance = 19.5;
// let price = 0;
// if(distance <= 4){
//     price = 30;
// }
// else if(distance > 4 && distance <= 9){
//     price = 30 + ((distance - 4) * 10);
// }
// else if(distance > 9 && distance <= 19){
//     price = 30 + (5 * 10) + ((distance - 9) * 15);
// }
// else{
//     price = 30 + (5 * 10) + (10 * 15) + ((distance - 19) * 20);
// }
// console.log("Total Price: " + price + " Rs");


//while loop
// let i=0;
// while(i<5){
//     console.log("i = "+i);
//     i++;
// }

//multiples of 5
// let i=1;
// while(i<=10){
//     console.log(i*5);
//     i++;
// }


//eh65vkek

//using do while loop
// let i=1;
// do{
//     console.log(i*5);
//     i++; 
// }while(i<=10);


//dom manipulation

//create a new paragraph and append it
const newParagraph = document.createElement.('p');
newParagraph.textContent = 'This is a new paragraph';
myDiv.appendChild(newParagraph);


//add an event listener
myDiv.addEventListener('click',()=>{
    alert('Div clicked!');
});






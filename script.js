const firstname="ineza";
const age="20";
const student= true;
const color ="brown";

console.log(firstname);
console.log(age);
console.log(student);
console.log(color);

//2

const name="gloire";
const ages=20;
const player= true;
const tree = null;
let city;

console.log(typeof name);
console.log(typeof ages);
console.log(typeof player);
console.log(typeof tree);
console.log(typeof city);


//3


const num1 = 10;
const num2 = 5;
console.log("sum", num1 + num2);
console.log("difference", num1 - num2);
console.log("product", num1 * num2);
console.log("quotient", num1 / num2);
console.log("remainder", num1 % num2);

//4

const agess = 20;

if (agess > 18){
    console.log("You are able to vote.")
}
else{
    console.log("You are not able to vote.")    
}

//5

const score = 35;

if(score >= 90){
    console.log("Grade: A");
}else{
    if(score >= 80){
        console.log("Grade: B");
    }else{
        if(score >= 70){
          console.log("grade:C");  
        }else{
            if(score >=60){
                console.log("Grade: D");

            }else{
                if(score >=50){
                    console.log("grade:e");
                }else{
                    console.log("grade:f");
                }
            }

        }

    }
}

//6

const day = 4;

switch(day){
    case 1:
        console.log("today is monday");
        break;

        case 2:
            console.log("today is teusday");
            break;

            case 3:
                console.log("today is wednesday");
                break;

                case 4:
                    console.log("today is thursday");
                    break;

                    case 5:
                        console.log("today is friday");
                        break;

                        case 6:
                            console.log("today is saturdaty");
                            break;

                            case 7:
                                console.log("today is sunday");
                                break;  
}


//7



for(i=0; i<=10; i++){
    console.log(i);
}


//8

for( i=0; i<=20; i++){
    if(i%2 ===0){
        console.log(i);
    }
}

//9

let sum=0;

for(i=0; i<=100; i++){
    sum += i;

}
console.log("is",sum);

//10

function greet(name){
    console.log( "hello ," + name + "!" );
}
greet("ineza");


//10
const num=5;
function isEven(num){
if (num % 2 ===0){
    console.log("true");
}else{
    console.log("false");
}
}

isEven(num);


//11
const a=10;
const b=20;
function max(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
}

max(a,b);

//13

function toFahrenheit(c) {

    return (c * 9/5) + 32;

}


const result = toFahrenheit(30);

console.log("Temperature in Fahrenheit is:", result);

//14

const array = ["banana", "apple", "orange", "tree", "fanta"];
console.log(array[0]);
console.log(array.length -1);
console.log(array.length);


//15

let arr = [];
console.log("Initial array:", arr);

arr.push(10);
console.log("After adding 10:", arr);

arr.push(20);
console.log("After adding 20:", arr);

arr.push(30);
console.log("After adding 30:", arr);

arr.pop();
console.log("After removing last item:", arr);

//16

let array1=[5,10,20,30];

for(let i=0; i<array.length; i++){
    console.log(array1[i]*2);
}

//17

let numbers = [1,2,3,4,5,6,7,8,9,10];

let filtered = numbers.filter(n => n > 5);

console.log(filtered);

//18

let names = ["john", "mary", "peter", "alice"];

let upper = names.map(name => name.toUpperCase());

console.log(upper);

//19

let numbers1 = [2, 4, 6, 8, 10];

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray(numbers1));

//20

const person={
name:"ineza",
age:20,
student:true,   

}

console.log(person.name);
console.log(person.age);
console.log(person.student);

//21

const car={
    brand:"toyota",
    model:"corolla",
    year:2020,
    color:"white",
}

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);

//22

let books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 200
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 320
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        pages: 250
    }
];

books.forEach(book => {
    console.log(book.title);
});

//24








/*function getLength(arr) {
	let count=0
	for(i=0; i<arr.length; i++){
		if (Array.isarray[a[i]] == true) {



        }
	}
}*/

//reversing a string
function reverseString(str){
    for(let i = str.length - 1; i >=0;i--){
      console.log(str[i]);
    }
  }
  reverseString("Regulate");

//counting characters
function characterCount(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i] != " "){
            count++;
        }
    }
    console.log(count);
}
characterCount("I am Malcom XXL"); 

//capitalizing words
function capitalize(str){
const arr=str.split(" ");
for(let i=0; i<arr.length; i++){
   arr[i]= arr[i][0].toUpperCase()
  + arr[i].substring(1);
    }
    console.log(arr.joi(" "))
}
capitalize("you will bow before me"); 

//finding the minimum and maximum in an array
function min_max(arr){
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
          max = arr[i];
  }
    if (arr[i] < min) {
    min = arr[i];
  }
}
  console.log("the minum and maximum are: ", min, max);
}
min_max([2,44,-55,8,2,1111,6.5]);

//sum of numbers in an array
function sum(arr){
  let sum=0;
  for(i=0; i<arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
}

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  return arr.filter(element => condition(element)); 
} 

//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n){
  if(n==0){
    console.log(1);
  }
  else 
  for(i=n-1; i>=1; i--){
    n *= i;
  }
console.log(n)
}
factorial(6)

//find out if a number is a prime number or not

function isPrime(n){
  let isPrime = true;

if (n <= 1) {
   isPrime = false;
} else {
   for (let i = 2; i < n; i++) {
       if (n % i === 0) {
           isPrime = false;
           break;
       }
   }
 console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);
}
}

//fibonacci series
function fibonacciSeries(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeries(8));

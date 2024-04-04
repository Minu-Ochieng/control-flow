//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
let numbersArray = (num)=>{
    const firstFour = num.slice(0,4).map(element => element*element);
    const lastTwo = num.slice(-2).map(item=> item+10);
    const newArray = firstFour.concat(lastTwo);
    return newArray;
}
console.log(numbersArray([5,4,7,9,8,6,3,2]));
//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

 const arrNum =(num) =>{
    while(num.length >4){
        console.log('less than 4th index')
        num.pop()
        if(num.length === 4){
            console.log('this is the 5th index');
            break;
        };
    };
 };
console.log(arrNum([1,2,3,4,5,6,7,8,9]));
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const continueStatement =(strings) =>{
    let fruits= ['apple','plum','banana','strawberries','kiwi']
   for(let i =0;i<strings.length;i++){
    if(i === 1){
        continue;
    };
    console.log(strings[1])
   };
};
continueStatement(fruits)


//Write a function that accepts an array of strings and console.logs each element using a for loop.
 const eachElement = (string) =>{

    for (let i = 0; i < string.length; i++) {
        console.log(array[i]);
    }
 }

 let names = ["Joy","Mutava","Amanda","Queen","Ndutta"];
 eachElement(names);

console.log(eachElement('Monday','Tuesday','Wednesday','Thrusday','Friday'));
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
const reverse =(string) =>{
    let newArray = ''
    let i = string.length - 1;
   while(i--){
    newArray=string[i];
    i--;
   }

   console.log(reverse('Mercy','Faith','Joy','Patience'));
}





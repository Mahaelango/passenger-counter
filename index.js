// let count=5+2
// console.log(count)
// let fistname = "maha",lastName = "lakshmi"
// Concatenate the two variables into a third variable called fullName
// let fulname = fistname+" "+lastName
// Log fullName to the console
//console.log(fulname)


//create function
/*
let name = "Linda"
let greeting = "Hi there"
function greetLinda(){
    console.log(greeting +", "+name+"!")
}
//calling function
greetLinda();
*/

//to have error message by clicking the puschase button
/*
let erropara =document.getElementById("error")
console.log(erropara) // get error id from html

function purchase(){
    console.log("button clicked");
    erropara.textContent="Something went wrong, please try again";//to print the text if i click the button
}
*/
//passenger counter APP
//save
let saveEL=document.getElementById("save-el")
//getting id from html 
let countEL=document.getElementById("count-el")

// function to increment by clicking
let count=0
console.log(saveEL)
function increment(){
count+=1
//to modify in inner text
countEL.textContent=count

}
//function to save
function save(){
    let countStr =count + " - "
    saveEL.textContent += countStr
    countEL.textContent=0
    count=0
}

  
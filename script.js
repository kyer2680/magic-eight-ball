var userName = 'Kye';
let randomNumber = Math.round (Math.random() * 10);
 
if(randomNumber === 1){
    console.log("yes");
}
else if(randomNumber === 2){
    console.log("no");
}
else if(randomNumber === 3){
    console.log("It is uncertain");
}
else if(randomNumber === 4){
    console.log(Absolutely)
}
else if(randomNumber === 5){
    console.log("Almost Certainly");
}
else if(randomNumber === 6){
    console.log("Almost certainly not");
}
else if(randomNumber === 7){
    console.log("With Certainty");
}
else if(randomNumber === 8){
    console.log("Unclear, try again");
}
else if(randomNumber === 9){
    console.log("The magic eightball says its foretold");
}
else{
    console.log("Its not going to happen")
}


//Check if a question is asked, trim method checks for a b
let question = document.getElementById('question').value;
if (question.trim() === ''){
    alert("Please enter a question.");
} else{
    document.getElementById('answer').textContent = answer;
}
});
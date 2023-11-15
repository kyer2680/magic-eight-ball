//Create an event listener
document.getElementByID('askButton').addEventListener('click', function(){
    let answer = ''; //Create answer variable to log answers
    let randomIndex = Math.floor(Math.random() * 10); //Create randomIndex variable to hold rounded number
    if(randomIndex === 0){
        answer = 'yes';
    } else if(randomIndex === 1){
        answer = 'no';
        console.log(answer);
    } else if(randomIndex === 2){
        answer = 'It is uncertain';
        console.log(answer);
    } else if(randomIndex === 3){
        answer = 'Absolutely';
        console.log(answer);
    } else if(randomIndex === 4){
        answer = 'Almost certainly';
        console.log(answer);
    } else if(randomIndex === 5){
        answer = 'Almost certainly not';
        console.log(answer);
    } else if(randomIndex === 6){
        answer = 'With certainty';
        console.log(answer);
    } else if(randomIndex === 7){
        answer = 'Unclear try again';
        console.log(answer);
    } else if(randomIndex === 8){
        answer = 'The magic eight ball says its foretold';
        console.log(answer);
    } else{
        answer = 'Its not going to happen';
        console.log(answer);
    }

    let question = document.getElementId('question').value;
    if(question.trim() === ''){
        alert("Please enter a question");
    } else{
        document.getElementId('answer').textContent = answer;
    }

});




//Conditional statement to set answer variable to a phrase

//Get value of the question element via ID

//Conditional to check if you wrote a question, if so display your fortune, if not alert 


//Check if a question is asked, trim method checks for a b

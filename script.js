//Create an event listener
document.getElementById('askButton').addEventListener('click', function () {
    let answer = '';
    let randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex === 0) {
        answer = 'yes';
    } else if (randomIndex === 1) {
        answer = 'no';
        console.log(answer);
    } else if (randomIndex === 2) {
        answer = 'It is uncertain';
        console.log(answer);
    } else if (randomIndex === 3) {
        answer = 'Absolutely';
        console.log(answer);
    } else if (randomIndex === 4) {
        answer = 'Almost certainly';
        console.log(answer);
    } else if (randomIndex === 5) {
        answer = 'Almost certainly not';
        console.log(answer);
    } else if (randomIndex === 6) {
        answer = 'With certainty';
        console.log(answer);
    } else if (randomIndex === 7) {
        answer = 'Unclear try again';
        console.log(answer);
    } else if (randomIndex === 8) {
        answer = 'The magic eight ball says its foretold';
        console.log(answer);
    } else {
        answer = 'Its not going to happen';
        console.log(answer);
    }

    let question = document.getElementById('question').value;
    if (question.trim() === '') {
        alert("Please enter a question");
    } else {
        document.getElementById('answer').textContent = answer;
    }

});


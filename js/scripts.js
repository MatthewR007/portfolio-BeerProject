/*const el = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})*/

/*
question: "How many territories did BeerEon begin with?",
answers: {
a: '6',
b: '2',
c: '4',
},
correctAnswer: 'c'
},
{
question: "Which beer is an example of a Lager?",
answers: {
a: 'Guiness',
b: 'Heinekin',
c: 'Newcastle'
},
correctAnswer: 'b'
},
{
question: "What year did prohibition end?",
answers: {
a: '1933',
b: '1915',
c: '1920'
},
correctAnswer: 'a'
}

function check() {
    const question1 = document.quiz.question1.value;
    const question2 = document.quiz.questioin2.value;
    let correct = 0;

    if (question1 == "Four" || question2 == "Heinekin") {
        correct++;
    }

    const messages = ["Great job!", "Pretty good.", "You can do better..."];

    let range = messages[""];

    if (correct < 1) {
        range = [2];
    } else if (correct < 2) {
        range = [1];
    } else {
        range = [0];
    }

    document.querySelector("#afterSubmit").style.display = "inline-block";

    document.querySelector("#message").innerHTML = messages[range];
    document.querySelector("#nCorrect").innerHTML = "You got " + correct + " correct.";
}

*/
const btnQ = document.querySelector("#btnQ");

btnQ.addEventListener("click", check);

function check() {
    const question1 = document.querySelector("#question1").value;
    const question2 = document.querySelector("#question2").value;
    let correct = 0;

    if (question1 == "Four") {
        correct++;
    }
    if (question2 == "Heinekin") {
        correct++;
    }

    const messages = ["Great job!", "Pretty good.", "You can do better..."];

    let range = messages[""];

    if (correct < 1) {
        range = [2];
    } else if (correct < 2) {
        range = [1];
    } else {
        range = [0];
    }

    document.querySelector("#afterSubmit").style.display = "inline-block";

    document.querySelector("#message").innerHTML = messages[range];
    document.querySelector("#nCorrect").innerHTML = "You got " + correct + " correct.";
}
const correctAns = ['a', 'a', 'b', 'c'];
const userAnswer = [];
let obtainScore = 0;
let score = document.querySelector(".score");
let ogScore = 0;

function submitAnswer(){
    userAnswer.length = 0;
    obtainScore = 0;
    ogScore = 0;

    for (let i = 0; i < 4; i++){
        let selected = 0;
        const radios = document.getElementsByName(`answer${i+1}`);
        for (let radio of radios) {
            if (radio.checked) {
                selected = radio.value;
                break;
            }
                console.log(selected);

        }
        if (selected !== null) {
            userAnswer.push(selected);
        } else {
            alert(`Please Answer question ${i+1}`);
            return;
        }
    }

    for (let i = 0; i < correctAns.length; i++) {
        if (correctAns[i] === userAnswer[i])
            score = obtainScore + 20;
    }
    console.log(score);

    console.log("User Answer:", userAnswer);

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}
  animation();

function animation() {
    const interval = setInterval(() => {
        ogScore = ogScore + 1;

        obtainScore.innerHTML = `<h1>your score is ${ogScore}%</h1>`;

        if (ogScore >= score) {
            clearInterval(interval);
            console.log("animation");
        }
    }, 10);
}
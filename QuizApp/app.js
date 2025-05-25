let correctAns = ['a', 'a', 'b', 'c'];
const userAnswer = [];
let score = 0;
let obtainScoreElement = document.querySelector(".score"); // Renamed to avoid confusion
let animatedScore = 0; // Renamed for clarity

function submitAnswer() {
    userAnswer.length = 0;
    score = 0;
    animatedScore = 0;

    // Check if all questions are answered
    for (let i = 0; i < 4; i++) {
        const radios = document.getElementsByName(`answer${i+1}`);
        let selected = null;
        
        for (let radio of radios) {
            if (radio.checked) {
                selected = radio.value;
                break;
            }
        }

        if (selected !== null) {
            userAnswer.push(selected);
        } else {
            alert(`Please answer the question ${i+1}`);
            return; // Exit if any question is unanswered
        }
    }

    // Calculate the actual score (25 points per correct answer)

    for (let i = 0; i < correctAns.length; i++) {
        if (correctAns[i] === userAnswer[i]) {
            score += 25;
        }
    }

    console.log("User Answers:", userAnswer);
    console.log("Final Score:", score);

    // Start the animation
    animation();

    // Smooth scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

function animation() {
    const interval = setInterval(() => {
        animatedScore += 1; // Increment by 1 each frame

        // Update the displayed score
        obtainScoreElement.innerHTML = `<h1>Your score is ${animatedScore}%</h1>`;

        // Stop when reaching the actual score
        if (animatedScore >= score) {
            clearInterval(interval);
            obtainScoreElement.innerHTML = `<h1>Your final score is ${score}%</h1>`; // Ensures exact score
        }
    }, 15); // Adjust speed if needed (lower = faster)
}
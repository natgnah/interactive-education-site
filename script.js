function startLesson() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = `
        <h2>Today's Lesson: Basic Math</h2>
        <p>Let's learn about addition! What is 2 + 2?</p>
        <input type="text" id="answer" placeholder="Enter your answer" />
        <button onclick="checkAnswer()">Submit</button>
        <p id="feedback"></p>
    `;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");
    if (answer == 4) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Oops! Try again.";
        feedback.style.color = "red";
    }
}

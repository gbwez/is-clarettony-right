// game.js

const statements = [
    "ClaretTony says Flynnders is a cunt.",
    "ClaretTony says the age of consent should be 6.",
    "ClaretTony says he deserves a new iPhone.",
    "ClaretTony deleted your post.",
    "ClaretTony states that he is never wrong.",
    "ClaretTony says that only he can approve new signings.",
    "ClaretTony suggests that only he knows what is going on at Burnley Football Club.",
    "ClaretTony lives in spack towers."
];

let currentStatement = 0;

function showStatement() {
    if (currentStatement < statements.length) {
        document.getElementById('statement').textContent = statements[currentStatement];
        document.getElementById('feedback').textContent = '';
    } else {
        endGame();
    }
}

function playerChoice(choice) {
    if (choice === 'agree') {
        document.getElementById('feedback').textContent = "Correct! ClaretTony can't be wrong.";
        document.getElementById('feedback').style.color = '#008000';
    } else {
        document.getElementById('feedback').textContent = "Wrong! Remember, ClaretTony is ALWAYS right!";
        document.getElementById('feedback').style.color = '#FF0000';
    }
    currentStatement++;
    setTimeout(showStatement, 2000);
}

function endGame() {
    document.getElementById('statement').textContent = "Thank you for playing!";
    document.getElementById('feedback').textContent = "Always remember, ClaretTony is always right.";
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'none');
}

// Start the game
showStatement();

// game.js

const statements = [
    "ClaretTony says 2 + 2 = 5.",
    "ClaretTony believes that the moon is made of cheese.",
    "ClaretTony declares that fish can walk on land.",
    "ClaretTony insists that time moves backwards on Sundays.",
    "ClaretTony states that rain is nature's way of laughing.",
    "ClaretTony proclaims that phones work better underwater.",
    "ClaretTony suggests that birds can swim better than fish.",
    "ClaretTony asserts that reading this sentence is impossible."
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
        document.getElementById('feedback').textContent = "Correct! ClaretTony appreciates your support.";
        document.getElementById('feedback').style.color = '#008000';
    } else {
        document.getElementById('feedback').textContent = "Hmm, remember, ClaretTony is always right!";
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

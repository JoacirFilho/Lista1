let num;
let numC = Math.floor(Math.random() * 10) + 1; 

do {
    num = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

    if (num === numC) {
        alert("Você acertou.");
    } else {
        alert("Você ERROU.");
    }
} while (num !== numC);

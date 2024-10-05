function generateAlphabetKey(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('');

    const randomNumbers = Math.random()*25;
    const randomNumber = Math.round(randomNumbers);

    let alphabetKey = alphabet[randomNumber];
    
    const outputDisplay = document.getElementById('alphabetOutput');
    outputDisplay.innerText = alphabetKey;
}

function generateNumber(){
    const randomForNumbers = Math.random()*100;
    const randomForNumber = Math.round(randomForNumbers);

    const numberDisplay = document.getElementById('numberOutput');
    numberDisplay.innerText = randomForNumber; 
}
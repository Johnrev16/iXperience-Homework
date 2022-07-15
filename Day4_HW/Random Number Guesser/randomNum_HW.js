const numGuess = document.getElementById('num-guess');
const buttonInput = document.getElementById('button-addon2');
const cardBody = document.getElementById("card-body");


buttonInput.addEventListener('click', (event) => {
    const random = Math.random() * 10;
    const random1 = Math.round(random);
    const userInput = numGuess.value;
    var resultDiv = document.createElement('div');

    if(random1 == userInput){
        resultDiv.innerHTML = "winner winner chicken dinner";
    }
    else{
        resultDiv.innerHTML = "sore loser :(";
    }
    
    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);

})
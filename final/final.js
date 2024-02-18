const memoryArray = [];

document.getElementById('shakeButton').addEventListener('click', async () => {
    const response = await fetch('final.json');
    const answers = await response.json();
        
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    // Select random answer and store it in memory
    const answerElement = document.getElementById('answer');
    answerElement.textContent = randomAnswer.answer;
    memoryArray.push(`${randomAnswer.answer}`);

    // Change color based on positive or negative allignment
    if (randomAnswer.allignment === 'positive') {
        answerElement.style.color = 'green';
    } else if (randomAnswer.allignment === 'negative') {
        answerElement.style.color = 'red';
    } else {
        answerElement.style.color = 'black';
    }

    // Store and display all answers in memory
    const memoryElement = document.getElementById('memory');
    memoryElement.innerHTML = ``;
    memoryArray.forEach(item => {
        // Create a new paragraph element for each item
        const paragraph = document.createElement('p');
        // Set the text content of the paragraph to the current item
        paragraph.textContent = item;
        // Append the paragraph element to the container in the DOM
        memoryElement.appendChild(paragraph);
    });
});
document.getElementById('settings-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const difficulty = document.getElementById('difficulty').value;
    fetchQuizQuestions(difficulty);
    document.getElementById('difficulty').style.display = 'none';
    document.querySelector('button[type="submit"]').style.display = 'none';
  });
  
  async function fetchQuizQuestions(difficulty) {
    const response = await fetch(`https://opentdb.com/api.php?amount=20&category=22&difficulty=${difficulty}&type=multiple`);
    const data = await response.json();
    displayQuiz(data.results);
  }
  
  function displayQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit-quiz');
    quizContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${shuffleArray([question.correct_answer, ...question.incorrect_answers]).map(answer => `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${answer}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
    submitButton.style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('try-again').style.display = 'none';
  
    submitButton.addEventListener('click', () => {
        submitQuiz(questions); // Call submitQuiz function on 'Submit Quiz' button click
    });
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function submitQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const tryAgainButton = document.getElementById('try-again');
    const submitButton = document.getElementById('submit-quiz');
    let score = 0;
    const incorrectQuestions = [];
  
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correct_answer) {
            score++;
        } else {
            incorrectQuestions.push({
                question: question.question,
                correct_answer: question.correct_answer,
                selected_answer: selectedAnswer ? selectedAnswer.value : 'No answer selected'
            });
        }
    });
  
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        ${incorrectQuestions.length > 0 ? `<h3>Incorrect Questions:</h3>` : ''}
        ${incorrectQuestions.map((q, index) => `
            <p>${index + 1}. ${q.question}</p>
            <p>Your Answer: ${q.selected_answer}</p>
            <p>Correct Answer: ${q.correct_answer}</p>
        `).join('')}
    `;
  
    tryAgainButton.style.display = 'block';
    tryAgainButton.addEventListener('click', () => {
        window.location.href = 'quiz.html'; // Navigate to main page on 'Try again' click
    });
  
    submitButton.style.display = 'none'; // Hide 'Submit Quiz' button after submission
  }
  
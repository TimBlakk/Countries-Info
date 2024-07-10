import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuizPage.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  const fetchQuizQuestions = async (difficulty) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=20&category=22&difficulty=${difficulty}&type=multiple`);
    const data = await response.json();
    setQuestions(data.results);
    setQuizStarted(true);
  };

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuizQuestions(difficulty);
  };

  const submitQuiz = () => {
    let newScore = 0;
    const newIncorrectQuestions = [];

    questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === question.correct_answer) {
        newScore++;
      } else {
        newIncorrectQuestions.push({
          question: question.question,
          correct_answer: question.correct_answer,
          selected_answer: selectedAnswer ? selectedAnswer.value : 'No answer selected'
        });
      }
    });

    setScore(newScore);
    setIncorrectQuestions(newIncorrectQuestions);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizSubmitted(false);
    setScore(0);
    setIncorrectQuestions([]);
  };

  return (
    <div id="quiz-container">
      <h1>Country Quiz</h1>
      <Link to="/"><h3 className="backLink">Go Back</h3></Link>
      
      {!quizStarted && (
        <form id="settings-form" onSubmit={handleSubmit}>
          <select 
            id="difficulty" 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button type="submit" className="btn-primary start-quiz">Start Quiz</button>
        </form>
      )}

      {quizStarted && !quizSubmitted && (
        <div id="quiz">
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{index + 1}. {question.question}</p>
              {shuffleArray([question.correct_answer, ...question.incorrect_answers]).map((answer, answerIndex) => (
                <label key={answerIndex}>
                  <input type="radio" name={`question${index}`} value={answer} />
                  {answer}
                </label>
              ))}
            </div>
          ))}
          <button id="submit-quiz" className="btn-primary" onClick={submitQuiz}>Submit Quiz</button>
        </div>
      )}

      {quizSubmitted && (
        <div id="result">
          <h2>Your Score: {score}/{questions.length}</h2>
          {incorrectQuestions.length > 0 && <h3>Incorrect Questions:</h3>}
          {incorrectQuestions.map((q, index) => (
            <div key={index}>
              <p>{index + 1}. {q.question}</p>
              <p>Your Answer: {q.selected_answer}</p>
              <p>Correct Answer: {q.correct_answer}</p>
            </div>
          ))}
          <button id="try-again" className="btn-primary" onClick={resetQuiz}>Try again</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
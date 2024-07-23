// pages/quiz.js
import React, { useState, useEffect } from 'react';
import LoginPage from './login';
import styles from '../styles/Quiz.module.css'; // Import CSS Module

const questions = [
    {
        "question": "Who is the main protagonist of Attack on Titan?",
        "options": [
            { "id": "main1", "value": "Eren Yeager", "label": "Eren Yeager" },
            { "id": "main2", "value": "Mikasa Ackerman", "label": "Mikasa Ackerman" },
            { "id": "main3", "value": "Armin Arlert", "label": "Armin Arlert" }
        ],
        "correctAnswer": "Eren Yeager"
    },
    {
        "question": "What is the name of the city protected by the Walls in Attack on Titan?",
        "options": [
            { "id": "city1", "value": "Shiganshina", "label": "Shiganshina" },
            { "id": "city2", "value": "Trost", "label": "Trost" },
            { "id": "city3", "value": "Maria", "label": "Maria" }
        ],
        "correctAnswer": "Shiganshina"
    },
    {
        "question": "Who is the leader of the Survey Corps in Attack on Titan?",
        "options": [
            { "id": "leader1", "value": "Erwin Smith", "label": "Erwin Smith" },
            { "id": "leader2", "value": "Hange Zoe", "label": "Hange Zoe" },
            { "id": "leader3", "value": "Levi Ackerman", "label": "Levi Ackerman" }
        ],
        "correctAnswer": "Erwin Smith"
    },
    {
        "question": "What is the name of Eren's Titan form in Attack on Titan?",
        "options": [
            { "id": "titan1", "value": "Colossal Titan", "label": "Colossal Titan" },
            { "id": "titan2", "value": "Armored Titan", "label": "Armored Titan" },
            { "id": "titan3", "value": "Attack Titan", "label": "Attack Titan" }
        ],
        "correctAnswer": "Attack Titan"
    },
    {
        "question": "Who is the mysterious Titan shifter known as the Female Titan in Attack on Titan?",
        "options": [
            { "id": "female1", "value": "Annie Leonhart", "label": "Annie Leonhart" },
            { "id": "female2", "value": "Pieck Finger", "label": "Pieck Finger" },
            { "id": "female3", "value": "Ymir", "label": "Ymir" }
        ],
        "correctAnswer": "Annie Leonhart"
    }
];

const Quiz = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearInterval(timerId);
        } else {
            handleSubmit();
        }
    }, [timeLeft]);

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer('');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleSubmit = () => {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setIsQuizComplete(true);
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    if (isQuizComplete) {
        return <div>Your score is: {score}/{questions.length}</div>;
    }

    return (
        <div className={styles.quizContainer}>
            <div className={styles.question}>
                <p>{questions[currentQuestionIndex].question}</p>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <div key={index} className={styles.option}>
                        <input
                            type="radio"
                            id={`option${index}`}
                            name="answer"
                            value={option.value}
                            checked={selectedAnswer === option.value}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        <label htmlFor={`option${index}`}>{option.label}</label>
                    </div>
                ))}
            </div>
            {currentQuestionIndex < questions.length - 1 && (
                <button onClick={handleNextQuestion} disabled={!selectedAnswer}>Next</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
                <button onClick={handleSubmit} disabled={!selectedAnswer}>Submit</button>
            )}
            <div className={styles.timer}>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</div>
        </div>
    );
};

export default Quiz;

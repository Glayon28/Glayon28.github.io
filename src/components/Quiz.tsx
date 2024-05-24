import React, { useState, useEffect } from "react";
import { QuizProps } from "../types";

const QuizComponent: React.FC<QuizProps> = ({ quiz, onComplete, onLeave }) => {
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [time, setTime] = useState(0);
  const totalQuestions = quiz.questions.length;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswerId) {
        score++;
      }
    });
    onComplete(score, time);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-3xl">{quiz.name}</h2>
      <div className="text-lg">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">{currentQuestion.text}</h3>
        {currentQuestion.options.map((option) => (
          <div
            key={option.id}
            className="flex items-center space-x-2 bg-gray-200 p-4 mb-1"
          >
            <input
              type="radio"
              name={`answer-${currentQuestion.id}`}
              id={`answer-${option.id}`}
              checked={answers[currentQuestion.id] === option.id}
              onChange={() => handleAnswer(option.id)}
            />
            <label htmlFor={`answer-${option.id}`}>{option.text}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div>
          {currentQuestionIndex < totalQuestions - 1 ? (
            <>
              <button
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                disabled={answers[currentQuestion.id] == null}
              >
                Next
              </button>
              <button
                onClick={onLeave}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Leave quiz
              </button>
            </>
          ) : (
            <button
              onClick={handleSubmit}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              disabled={answers[currentQuestion.id] == null}
            >
              Complete
            </button>
          )}
        </div>
        <div className="text-lg flex ">
          {Math.floor(time / 60)}:{("0" + (time % 60)).slice(-2)}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;

import React, { useState } from "react";
import { Quiz } from "../types";
import QuestionForm from "./QuestionForm";

interface QuizFormProps {
  onSave: (quiz: Quiz) => void;
  initialQuiz?: Quiz;
}

const QuizForm: React.FC<QuizFormProps> = ({ onSave, initialQuiz }) => {
  const [quiz, setQuiz] = useState<Quiz>(
    initialQuiz || { id: "", name: "", questions: [] }
  );

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { id: "", text: "", options: [], correctAnswerId: "" },
      ],
    });
  };

  const handleAddName = (name: string) => {
    setQuiz({
      ...quiz,
      name,
    });
  };

  const handleSaveQuiz = () => {
    if (!quiz.name.trim() || quiz.questions.length === 0) {
      return;
    }
    onSave(quiz);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveQuiz();
      }}
      className="p-4"
    >
      <div>
        <label
          htmlFor={`name-text-${quiz.id}`}
          className="pr-4 text-lg font-medium"
        >
          Name
        </label>
        <input
          type="text"
          id={`name-text-${quiz.id}`}
          value={quiz.name}
          onChange={(e) => handleAddName(e.target.value)}
          className="w-1/4 border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-2 rounded-lg mt-1"
        />
      </div>
      <div>
        {quiz.questions.map((question, index) => (
          <QuestionForm
            key={index}
            question={question}
            onChange={(updatedQuestion) => {
              const newQuestions = quiz.questions.map((q, i) =>
                i === index ? updatedQuestion : q
              );
              setQuiz({ ...quiz, questions: newQuestions });
            }}
            onDelete={() => {
              const newQuestions = [...quiz.questions];
              newQuestions.splice(index, 1);
              setQuiz({ ...quiz, questions: newQuestions });
            }}
          />
        ))}
      </div>
      <div className="mt-10">
        <button
          type="button"
          onClick={handleAddQuestion}
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Add question
        </button>

        <button
          type="submit"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Save quiz
        </button>
      </div>
    </form>
  );
};

export default QuizForm;

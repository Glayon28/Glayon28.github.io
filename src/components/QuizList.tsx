import React from "react";
import { Quiz } from "../types";

interface QuizListProps {
  quizzes: Quiz[];
  searchQuery: string;
  onTakeQuiz: (quiz: Quiz) => void;
  onEditQuiz: (quiz: Quiz) => void;
  onDeleteQuiz: (id: string) => void;
}

const QuizList: React.FC<QuizListProps> = ({
  quizzes,
  searchQuery,
  onTakeQuiz,
  onEditQuiz,
  onDeleteQuiz,
}) => {
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <ul>
        {filteredQuizzes.map((quiz) => (
          <li
            key={quiz.id}
            className="mb-2 flex justify-between items-center bg-gray-200"
          >
            <h2 className="ml-4 text-xl font-medium">{quiz.name}</h2>
            <div className="">
              <button
                className="mt-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => onTakeQuiz(quiz)}
              >
                Start
              </button>
              <button
                className="mt-2 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => onEditQuiz(quiz)}
              >
                Edit
              </button>
              <button
                className="mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => onDeleteQuiz(quiz.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;

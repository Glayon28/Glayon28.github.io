import React, { useState, useEffect, useCallback } from "react";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import QuizComponent from "./components/Quiz";
import Result from "./components/Result";
import { Quiz as QuizType } from "./types";
import fakeApi from "./utils/fakeApi";
import QuizSearch from "./components/QuizSearch";

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);
  const [editingQuiz, setEditingQuiz] = useState<QuizType | null>(null);
  const [creatingQuiz, setCreatingQuiz] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [quizTime, setQuizTime] = useState(0);

  const fetchQuizzes = useCallback(async () => {
    const quizzes = await fakeApi.getQuizzes();
    setQuizzes(quizzes);
  }, [setQuizzes]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleSaveQuiz = async (quiz: QuizType) => {
    const updatedQuizzes = editingQuiz
      ? quizzes.map((q) => (q.id === quiz.id ? quiz : q))
      : [...quizzes, { ...quiz, id: String(quizzes.length + 1) }];

    setQuizzes(updatedQuizzes);
    setEditingQuiz(null);
    setCreatingQuiz(false);
    await fakeApi.saveQuiz(quiz);
  };

  const handleEditQuiz = (quiz: QuizType) => {
    setEditingQuiz(quiz);
    setCreatingQuiz(false);
  };

  const handleDeleteQuiz = async (id: string) => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
    setQuizzes(updatedQuizzes);
    await fakeApi.deleteQuiz(id);
  };

  const handleCompleteQuiz = (score: number, time: number) => {
    setScore(score);
    setQuizTime(time);
  };

  const handleLeaveQuiz = () => {
    setScore(null);
    setCurrentQuiz(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="App container mx-auto p-4">
      {!currentQuiz && !editingQuiz && score === null && (
        <>
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold  p-4">Quizzes</h1>
            <QuizSearch onSearch={handleSearch} />
          </div>
          <QuizList
            quizzes={quizzes}
            onTakeQuiz={(quiz: QuizType) => {
              setCurrentQuiz(quiz);
              setCreatingQuiz(false);
            }}
            onEditQuiz={handleEditQuiz}
            onDeleteQuiz={handleDeleteQuiz}
            searchQuery={searchQuery}
          />
          <button
            onClick={() => setCreatingQuiz(true)}
            className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            create new
          </button>
        </>
      )}
      {creatingQuiz && (
        <>
          <QuizForm onSave={handleSaveQuiz} />
          <button
            onClick={() => setCreatingQuiz(false)}
            className="ml-4 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            cancel
          </button>
        </>
      )}
      {editingQuiz && (
        <>
          <QuizForm initialQuiz={editingQuiz} onSave={handleSaveQuiz} />
          <button
            onClick={() => setEditingQuiz(null)}
            className="ml-4 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            cancel
          </button>
        </>
      )}
      {currentQuiz && score === null && (
        <QuizComponent
          quiz={currentQuiz}
          onComplete={handleCompleteQuiz}
          onLeave={handleLeaveQuiz}
        />
      )}
      {score !== null && (
        <Result
          score={score}
          time={quizTime}
          total={currentQuiz?.questions.length || 0}
          onRestart={handleLeaveQuiz}
        />
      )}
    </div>
  );
};

export default App;

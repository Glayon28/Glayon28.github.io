import React from "react";
import { QuestionFormProps } from "../types";

const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  onChange,
  onDelete,
}) => {
  const handleAddOption = () => {
    onChange({
      ...question,
      options: [...question.options, { id: "", text: "" }],
    });
  };

  const handleDeleteOption = (index: number) => {
    const newOptions = question.options.filter((_, i) => i !== index);
    onChange({ ...question, options: newOptions });
  };

  const handleDeleteQuestion = () => {
    onDelete();
  };

  return (
    <div className="space-y-2">
      <div className="mt-4">
        <label
          htmlFor={`question-text-${question.id}`}
          className="pr-4 text-lg font-medium"
        >
          Question
        </label>
        <input
          type="text"
          id={`question-text-${question.id}`}
          value={question.text}
          onChange={(e) => onChange({ ...question, text: e.target.value })}
          className="w-2/4 border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-2 rounded-lg mt-1"
        />
        <button
          type="button"
          onClick={handleDeleteQuestion}
          className="ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
      <div>
        <h3>Answer options:</h3>
        {question.options.map((option, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              value={option.text}
              onChange={(e) => {
                const newOptions = question.options.map((opt, i) =>
                  i === index ? { ...opt, text: e.target.value } : opt
                );
                onChange({ ...question, options: newOptions });
              }}
              className="w-9/12 border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-2 rounded-lg mt-1"
            />
            <input
              type="radio"
              className=""
              name={`correct-answer-${question.id}`}
              checked={option.id === question.correctAnswerId}
              onChange={() =>
                onChange({ ...question, correctAnswerId: option.id })
              }
            />
            <button
              type="button"
              onClick={() => handleDeleteOption(index)}
              className="ml-2 mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleAddOption}
        className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-3 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add answer option
      </button>
    </div>
  );
};

export default QuestionForm;

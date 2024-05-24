import React from "react";
import { ResultProps } from "../types";

const Result: React.FC<ResultProps> = ({ score, total, onRestart, time }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Result</h2>
      <p className="text-xl">
        Your result: {score} of {total}
      </p>
      <p className="text-lg">
        Time taken: {Math.floor(time / 60)}:{("0" + (time % 60)).slice(-2)}
      </p>{" "}
      <button
        onClick={onRestart}
        className="mt-5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Back
      </button>
    </div>
  );
};

export default Result;

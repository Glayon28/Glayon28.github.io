import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "../hooks/useLocalStorage";
import { Quiz } from "../types";

const fakeQuizzes: Quiz[] = [
  {
    id: "1",
    name: "React Knowledge",
    questions: [
      {
        id: "q1",
        text: "What is React?",
        options: [
          { id: "o1", text: "A server-side framework" },
          {
            id: "o2",
            text: "A client-side library for building user interfaces",
          },
          { id: "o3", text: "A database management system" },
          { id: "o4", text: "A CSS preprocessor" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q2",
        text: "Who developed React?",
        options: [
          { id: "o1", text: "Google" },
          { id: "o2", text: "Microsoft" },
          { id: "o3", text: "Facebook" },
          { id: "o4", text: "Twitter" },
        ],
        correctAnswerId: "o3",
      },
      {
        id: "q3",
        text: "What is JSX?",
        options: [
          {
            id: "o1",
            text: "A JavaScript syntax extension that allows mixing HTML with JavaScript",
          },
          { id: "o2", text: "A new type of JavaScript variable" },
          { id: "o3", text: "A CSS framework" },
          { id: "o4", text: "A database query language" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q4",
        text: "Which method is used to render React elements to the DOM?",
        options: [
          { id: "o1", text: "renderComponent" },
          { id: "o2", text: "createDOM" },
          { id: "o3", text: "ReactDOM.render" },
          { id: "o4", text: "DOMReact.create" },
        ],
        correctAnswerId: "o3",
      },
      {
        id: "q5",
        text: "What is a React component?",
        options: [
          {
            id: "o1",
            text: "A function or class that optionally accepts inputs and returns a React element",
          },
          { id: "o2", text: "A type of variable in JavaScript" },
          { id: "o3", text: "A database table" },
          { id: "o4", text: "A method to style React applications" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q6",
        text: "How do you create a class component in React?",
        options: [
          { id: "o1", text: "Using the function keyword" },
          { id: "o2", text: "Extending the React.Component class" },
          { id: "o3", text: "Using the const keyword" },
          { id: "o4", text: "By importing createComponent from React" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q7",
        text: "What is the purpose of the render() method in a class component?",
        options: [
          { id: "o1", text: "To initialize the component state" },
          { id: "o2", text: "To return the HTML to be rendered to the DOM" },
          { id: "o3", text: "To handle user input" },
          { id: "o4", text: "To manage component lifecycle events" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q8",
        text: "What is state in React?",
        options: [
          {
            id: "o1",
            text: "A way to store information about the component's environment",
          },
          { id: "o2", text: "A type of Redux store" },
          { id: "o3", text: "A method to pass data to child components" },
          { id: "o4", text: "A type of React component" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q9",
        text: "How do you update the state of a component?",
        options: [
          { id: "o1", text: "Using the setState method" },
          { id: "o2", text: "Directly modifying the state object" },
          { id: "o3", text: "Using the updateState method" },
          { id: "o4", text: "Using the changeState method" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q10",
        text: "What is props in React?",
        options: [
          { id: "o1", text: "A method to handle component lifecycle events" },
          { id: "o2", text: "A special keyword used to define CSS styles" },
          {
            id: "o3",
            text: "Short for properties, used to pass data from parent to child components",
          },
          {
            id: "o4",
            text: "A way to store information about the component's environment",
          },
        ],
        correctAnswerId: "o3",
      },
      {
        id: "q11",
        text: "What is a functional component?",
        options: [
          {
            id: "o1",
            text: "A component created using a function that returns a React element",
          },
          { id: "o2", text: "A class component with additional hooks" },
          { id: "o3", text: "A component that uses state" },
          { id: "o4", text: "A component that manages side effects" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q12",
        text: "What are hooks in React?",
        options: [
          {
            id: "o1",
            text: "Functions that let you use state and other React features in functional components",
          },
          { id: "o2", text: "Methods to create class components" },
          { id: "o3", text: "A way to handle events in React" },
          { id: "o4", text: "A method to pass data between components" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q13",
        text: "Which hook is used to add state to a functional component?",
        options: [
          { id: "o1", text: "useEffect" },
          { id: "o2", text: "useState" },
          { id: "o3", text: "useContext" },
          { id: "o4", text: "useReducer" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q14",
        text: "What does the useEffect hook do?",
        options: [
          { id: "o1", text: "Manages component state" },
          {
            id: "o2",
            text: "Handles component lifecycle events and side effects",
          },
          { id: "o3", text: "Provides a way to pass data between components" },
          { id: "o4", text: "Styles the component" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q15",
        text: "How can you pass data to a child component?",
        options: [
          { id: "o1", text: "Using state" },
          { id: "o2", text: "Using hooks" },
          { id: "o3", text: "Using props" },
          { id: "o4", text: "Using methods" },
        ],
        correctAnswerId: "o3",
      },
      {
        id: "q16",
        text: "What is the virtual DOM?",
        options: [
          {
            id: "o1",
            text: "A copy of the real DOM that is used to optimize rendering",
          },
          { id: "o2", text: "A JavaScript library for handling events" },
          { id: "o3", text: "A new HTML element" },
          { id: "o4", text: "A method to create components" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q17",
        text: "How does React handle events?",
        options: [
          { id: "o1", text: "Using inline event handlers" },
          { id: "o2", text: "Using a custom event handling system" },
          { id: "o3", text: "Using standard DOM event handlers" },
          { id: "o4", text: "Using external libraries" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q18",
        text: "What is the purpose of the key prop in React?",
        options: [
          {
            id: "o1",
            text: "To identify unique elements in a list for efficient updates",
          },
          { id: "o2", text: "To handle user authentication" },
          { id: "o3", text: "To pass data between components" },
          { id: "o4", text: "To manage component state" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q19",
        text: "What is the difference between a controlled and uncontrolled component?",
        options: [
          {
            id: "o1",
            text: "A controlled component manages its own state, while an uncontrolled component does not",
          },
          {
            id: "o2",
            text: "An uncontrolled component manages its own state, while a controlled component does not",
          },
          {
            id: "o3",
            text: "Controlled components are only used in class components, while uncontrolled components are used in functional components",
          },
          { id: "o4", text: "There is no difference between them" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q20",
        text: "What is context in React?",
        options: [
          { id: "o1", text: "A method to manage component state" },
          {
            id: "o2",
            text: "A way to pass data through the component tree without passing props down manually",
          },
          { id: "o3", text: "A hook for handling side effects" },
          { id: "o4", text: "A type of event handler" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q21",
        text: "How do you create a context in React?",
        options: [
          { id: "o1", text: "Using React.createContext()" },
          { id: "o2", text: "Using React.createState()" },
          { id: "o3", text: "Using React.createContextProvider()" },
          { id: "o4", text: "Using React.createEvent()" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q22",
        text: "What is React Router used for?",
        options: [
          { id: "o1", text: "To handle CSS styling" },
          { id: "o2", text: "To manage state" },
          { id: "o3", text: "To enable dynamic routing in React applications" },
          { id: "o4", text: "To manage side effects" },
        ],
        correctAnswerId: "o3",
      },
      {
        id: "q23",
        text: "What is a higher-order component (HOC) in React?",
        options: [
          {
            id: "o1",
            text: "A function that takes a component and returns a new component",
          },
          { id: "o2", text: "A component that manages state" },
          { id: "o3", text: "A component that handles routing" },
          { id: "o4", text: "A hook that manages side effects" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q24",
        text: "What is the purpose of the shouldComponentUpdate lifecycle method?",
        options: [
          {
            id: "o1",
            text: "To determine whether the component should re-render",
          },
          { id: "o2", text: "To handle state initialization" },
          { id: "o3", text: "To handle component cleanup" },
          { id: "o4", text: "To manage side effects" },
        ],
        correctAnswerId: "o1",
      },
      {
        id: "q25",
        text: "How do you optimize performance in a React application?",
        options: [
          { id: "o1", text: "By using useEffect hook exclusively" },
          {
            id: "o2",
            text: "By using React.memo, shouldComponentUpdate, and useCallback",
          },
          { id: "o3", text: "By using inline styles" },
          { id: "o4", text: "By avoiding the use of functional components" },
        ],
        correctAnswerId: "o2",
      },
    ],
  },
  {
    id: "2",
    name: "Science Quiz",
    questions: [
      {
        id: "q1",
        text: "What is the chemical symbol for water?",
        options: [
          { id: "o1", text: "O2" },
          { id: "o2", text: "H2O" },
          { id: "o3", text: "CO2" },
          { id: "o4", text: "NaCl" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q2",
        text: "What planet is known as the Earth's twin?",
        options: [
          { id: "o1", text: "Mars" },
          { id: "o2", text: "Venus" },
          { id: "o3", text: "Jupiter" },
          { id: "o4", text: "Saturn" },
        ],
        correctAnswerId: "o2",
      },
    ],
  },
];

const fakeApi = {
  getQuizzes: () =>
    new Promise<Quiz[]>((resolve) => {
      const allQuizes = getLocalStorageValue("quizList", fakeQuizzes);
      setTimeout(() => resolve(allQuizes), 500);
    }),

  saveQuiz: (quiz: Quiz) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        const index = fakeQuizzes.findIndex((q) => q.id === quiz.id);
        if (index >= 0) {
          fakeQuizzes[index] = quiz;
        } else {
          fakeQuizzes.push(quiz);
        }
        setLocalStorageValue("quizList", fakeQuizzes);
        resolve();
      }, 500);
    }),

  deleteQuiz: (id: string) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        const index = fakeQuizzes.findIndex((q) => q.id === id);
        if (index >= 0) {
          fakeQuizzes.splice(index, 1);
        }
        console.log(fakeQuizzes);
        setLocalStorageValue("quizList", fakeQuizzes);
        resolve();
      }, 500);
    }),
};

export default fakeApi;

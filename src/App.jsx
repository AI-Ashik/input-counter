import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + inputValue);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleReset = () => {
    setCount(0);
    setInputValue(1);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Counter App
      </h1>
      <p className="text-2xl mb-4 text-gray-900 dark:text-gray-300">
        Count: <span className="font-semibold">{count}</span>
      </p>
      <input
        type="number"
        min="1"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded p-2 mb-4 w-24 text-center dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleIncrement}
          disabled={count + inputValue > 100}
          className={`px-4 py-2 text-white font-semibold rounded ${
            count + inputValue > 100
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          disabled={count - inputValue < 0}
          className={`px-4 py-2 text-white font-semibold rounded ${
            count - inputValue < 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-white font-semibold bg-green-500 hover:bg-green-600 rounded"
        >
          Reset
        </button>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 text-white font-semibold bg-gray-800 hover:bg-gray-700 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;

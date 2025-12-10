import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl max-w-sm mx-auto my-8 border border-indigo-100">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-4 text-center">Contador: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      >
        Sumar
      </button>
    </div>
  );
}

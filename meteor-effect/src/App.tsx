import "./App.css";
import { Meteors } from "./components/Meteors";

function App() {
  return (
    <div className="flex items-center justify-center h-[40rem]">
      <div className="md:h-1/2 w-3/4 relative max-w-xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 7l9.2 9.2M17 7v10H7" />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">
            Here's my attempt at meteors
          </h1>

          <p className="font-normal text-base text-gray-500 mb-4 relative z-50">
            This is just a space I could write anything, something noone will
            ever view and yet there is I guess a chance, so in that case hello
            :)
          </p>

          <button className="border px-4 py-1 rounded-lg !text-sm border-gray-500 text-gray-300 bg-gray-800 shadow shadow-teal-500/50">
            I am a button &rarr;
          </button>

          <Meteors number={10} />
        </div>
      </div>
    </div>
  );
}

export default App;

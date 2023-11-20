import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen flex justify-center p-5 items-center">
      <NavBar />
      <div className="space-y-5 text-center gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">Hamburger Menu</h1>
        <p className="max-w-lg text-sm leading-6">HAMBURGER</p>
        <button className="px-5 py-3 bg-gradient-to-tr from-gray-100 via-gray-400 to-gray-300 rounded-md text-sm text-stone-900 hover:bg-gray-500 hover:border font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

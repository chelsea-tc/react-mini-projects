import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* <Header /> */}
      <div className="h-[40rem]">
        <Card />
      </div>
    </div>
  );
}

export default App;

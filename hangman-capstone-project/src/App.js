import "./App.css";
import Hangman from "./components/Hangman";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/game" element={<Hangman />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Character from "./components/Character.jsx";
import Film from "./components/Film.jsx";
import Planet from "./components/Planet.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/films/:id" element={<Film />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

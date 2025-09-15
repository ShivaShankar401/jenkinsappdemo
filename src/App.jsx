import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter basename="/jenkinsviteappdemo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <h1>CICD JENKINS DEMO</h1>
      <p>
        This is a demo React + Vite app deployed with Jenkins & Tomcat.
      </p>
    </div>
  );
}

export default App;

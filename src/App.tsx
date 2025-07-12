import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/";
import Contact from "./pages/contact/";
import AboutMe from "./pages/about-me";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
}

export default App;

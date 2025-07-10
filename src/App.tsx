import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/";
import Contact from "./pages/contact/";
import AboutMe from "./pages/about-me";
import Work from "./pages/work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;

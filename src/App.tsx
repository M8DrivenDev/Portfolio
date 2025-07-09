import "./App.css";
import Navbar from "./components/navbar";
import SideLinks from "./components/sideLinks";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
        rel="stylesheet"
      />
      <div className="header">
        <SideLinks />
        <Navbar />
      </div>
    </>
  );
}

export default App;

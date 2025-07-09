import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src="./logo-white.svg" alt="logo" className="nav-logo" />
        <a href="/">M8DrivenDev</a>
      </div>
      <ul>
        <li className="nav-link active-nav-link">
          <a href="/" className="nav-link active-nav-link">
            <span className="text-primary">#</span> home
          </a>
        </li>
        <li className="nav-link">
          <a href="/work" className="nav-link">
            <span className="text-primary">#</span> work
          </a>
        </li>
        <li className=" nav-link">
          <a href="/about-me" className=" nav-link">
            <span className="text-primary">#</span> about-me
          </a>
        </li>
        <li className="nav-link">
          <a href="/contact" className="nav-link">
            <span className="text-primary">#</span> contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

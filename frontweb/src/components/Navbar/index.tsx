import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary text-primary main-nav">
      <div className="container-fluid">
        <h1>Top Cars</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcars-navbar"
          aria-controls="topcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topcars-navbar">
          <ul className="navbar-nav offset-md-7 offset-xl-6 main-menu">
            <li>
              <p className="text-primary">HOME</p>
            </li>
            <li>
              <p className="text-primary">CATALOG</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

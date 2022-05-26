import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Kunhyuk's Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="links">HOME</div>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className="links">ABOUT</div>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <div className="links">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
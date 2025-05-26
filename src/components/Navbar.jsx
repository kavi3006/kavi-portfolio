function Navbar() {
    return (
        <nav className="navbar">
    <div className="nav-container">
      <div className="nav-logo">
        <a href="#home">Kavi's Portfolio</a>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="./public/Kavi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-toggle" id="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
    );
  }
  
  export default Navbar;
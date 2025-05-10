function Home() {
    return (
        <section id="home" className="home-section">
            <div className="content">
                <div className="left-section">
                    <h1 className="welcome-text">Welcome to My Portfolio</h1>
                    <h2 className="intro-text">I'm <span className="name-highlight">Kavi</span> a passionate</h2>
                    <span id="typing-text" className="typing-text"></span>
                    <div className="social-links">
                        <a href="https://github.com/kavi3006" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/kavi-shah/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://x.com/kavi_3006" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn primary-btn">View My Work</a>
                        <a href="#contact" className="btn secondary-btn">Contact Me</a>
                    </div>
                </div>
                <div className="right-section">
                    <img src="./public/image.png" alt="Programmer illustration" className="programmer-illustration" />
                </div>
            </div>
        </section>
    )
}

export default Home;
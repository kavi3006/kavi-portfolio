function Project() {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <img src="project1.jpg" alt="Project 1"/>
                        </div>
                        <div className="project-info">
                            <h3>FaceTune</h3>
                            <p>A facial recognition-based music recommendation system that uses machine learning and deep learning to recommend music based on the user's facial expression.</p>
                            <div className="project-tags">
                                <span>Machine Learning</span>
                                <span>Deep Learning</span>
                                <span>Python</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn small-btn"><i className="fas fa-link"></i> Live Demo</a>
                                <a href="#" className="btn small-btn"><i className="fab fa-github"></i> Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src="project2.jpeg" alt="Project 2"/>
                        </div>
                        <div className="project-info">
                            <h3>WealthWise</h3>
                            <p>A personal finance management system that uses machine learning to analyze the user's spending and provide personalized recommendations for saving and investing.</p>
                            <div className="project-tags">
                                <span>Machine Learning</span>
                                <span>Python</span>
                                <span>Streamlit</span>
                            </div>
                            <div className="project-links">
                                <a href="https://wealthwise-finance.streamlit.app/" className="btn small-btn"><i className="fas fa-link"></i> Live Demo</a>
                                <a href="https://github.com/kavi3006/WealthWise" className="btn small-btn"><i className="fab fa-github"></i> Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src="project3.png" alt="Project 3"/>
                        </div>
                        <div className="project-info">
                            <h3>Amazon Clone</h3>
                            <p>A clone of the Amazon website Frontend using HTML and CSS</p>
                            <div className="project-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div className="project-links">
                                <a href="https://amazon-clone-alpha-ruddy.vercel.app/" className="btn small-btn" target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i> Live Demo</a>
                                <a href="https://github.com/kavi3006/amazon-clone" className="btn small-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src="project4.png" alt="Project 4"/>
                        </div>
                        <div className="project-info">
                            <h3>Tic Tac Toe iOS App</h3>
                            <p>A Tic Tac Toe iOS app that allows users to play the game against the computer.</p>
                            <div className="project-tags">
                                <span>Swift</span>
                                <span>UIKit</span>
                                <span>Xcode</span>
                            </div>
                            <div className="project-links">
                                <a href="./public/TicTacToe Demo.mp4" className="btn small-btn" target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i> Live Demo</a>
                                <a href="https://github.com/kavi3006/TicTacToe-iOS-App" className="btn small-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;
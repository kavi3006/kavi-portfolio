function Footer() {
    return (
        <footer className="footer">
            <div className="section-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>Kavi Shah</h3>
                        <p>Frontend developer specialising in creating beautiful and functional web experiences.</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/kavi3006" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/kavi-shah/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://x.com/kavi_3006" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="mailto:kavi3006@hotmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                        <a href="tel:+919763199319" target="_blank"><i className="fas fa-phone-alt"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 Kavi Shah. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
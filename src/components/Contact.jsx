function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>kavi3006@hotmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 9763199319</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" id="contact-form">
                        <input type="hidden" name="access_key" value="ee7aea39-da76-48bf-af70-e221406dccd2" />
                        <input type="hidden" name="from_name" value="Kavi's Portfolio" />
                        <input type="hidden" name="subject" value="New Contact Message" />
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
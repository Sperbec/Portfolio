const Contact = () => {
    const myLinkedin = "https://www.linkedin.com/in/spb-sacho";
    const linkedinIcon = "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"

    return (
        <section
            id="contact"
            className="contact"
        >
            <h2>Contact</h2>

            <div className="circle">
                <img src={linkedinIcon} alt="LinkedIn" />
            </div>

        </section>
    );
};

export default Contact;

 const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="footer"
        >
            <blockquote>&copy; {currentYear} All rights reserved.</blockquote>
        </footer>
    );

};

export default Footer;

const Navbar = () => {

    const about = "#about";
    const knowledge = "#knowledge";
    const contact = "#contact";

    return (
        <nav
            className="navbar"
        >
            <ul>
                <li><a href={about}>About</a></li>
                <li><a href={knowledge}>Knowledge</a></li>
                <li><a href={contact}>Contact</a></li>
            </ul>
        </nav>
    );

};

export default Navbar;

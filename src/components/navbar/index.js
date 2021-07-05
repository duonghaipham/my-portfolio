import './style.scss';

const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="#home" id="home-link">
                <i className="material-icons"></i>
            </a>
            <a href="#about" id="about-link">
                <i className="material-icons"></i>
            </a>
            <a href="#information" id="info-link">
                <i className="material-icons"></i>
            </a>
        </nav>
    );
};

export default Navbar;
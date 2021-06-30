import './style.scss';

const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="#" id="home">
                <i className="material-icons"></i>
            </a>
            <a href="#welcome-section" id="intro">
                <i className="material-icons"></i>
            </a>
            <a href="#work" id="work">
                <i className="material-icons"></i>
            </a>
            <a href="#information" id="info">
                <i className="material-icons"></i>
            </a>
        </nav>
    );
};

export default Navbar;
import './style.scss';

const Footer = () => {
    const date = new Date();
    return (
        <footer id="footer">
            {date.getFullYear()} Designed by Tyler.
        </footer>
    );
};

export default Footer;
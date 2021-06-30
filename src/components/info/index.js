import './style.scss';

const Info = () => {
    return (
        <section id="information">
            <h1>For further information...</h1>
            <div id="contact">
                <a id="facebook" className="contact-item" href="https://www.facebook.com/duong2001.ph/">
                    <i className="fa" />Facebook
                </a>
                <a id="github" className="contact-item" href="https://github.com/phduong2001">
                    <i className="fa" />GitHub
                </a>
                <a id="twitter" className="contact-item" href="https://twitter.com/duongphamit">
                    <i className="fa" />Twitter
                </a>
                <a id="mail" className="contact-item" href="mailto:phduongit2k1@gmail.com">
                    <i className="fa" />Send a mail
                </a>
            </div>
        </section>
    );
};

export default Info;
import './style.scss';

const Info = () => {
    return (
        <section id="information">
            <h1>For further information...</h1>
            <div id="contact">
                <a id="facebook" className="contact-item fa" href="https://www.facebook.com/duong2001.ph/">Facebook</a>
                <a id="github" className="contact-item fa" href="https://github.com/phduong2001">GitHub</a>
                <a id="twitter" className="contact-item fa" href="https://twitter.com/duongphamit">Twitter</a>
                <a id="mail" className="contact-item fa" href="mailto:phduongit2k1@gmail.com">Send a mail</a>
            </div>
        </section>
    );
};

export default Info;
import './style.scss';

const Info = () => {
    return (
        <section id="information">
            <div id="information-container">
                <h1>For further information...</h1>
                <p id="places">Find me here:</p>
                <div id="contact">
                    <a id="facebook" className="contact-item" href="https://www.facebook.com/duonghaipham01/">
                        <i className="fa" />
                    </a>
                    <a id="instagram" className="contact-item" href="https://www.instagram.com/phduong2001/">
                        <i className="fa" />
                    </a>
                    <a id="github" className="contact-item" href="https://github.com/phduong2001">
                        <i className="fa" />
                    </a>
                    <a id="twitter" className="contact-item" href="https://twitter.com/duonghaipham">
                        <i className="fa" />
                    </a>
                </div>
                <p id="email">Or make an email to me at <a href="mailto:duonghaipham2001@gmail.com">duonghaipham2001@gmail.com</a></p>
            </div>
        </section>
    );
};

export default Info;
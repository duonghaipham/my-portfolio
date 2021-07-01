import './style.scss';
import avt from '../../assets/img/avt.jpg';

const Intro = () => {
    return (
        <section id="welcome-section">
            <div id="text">
                <h1>Hello! I am Tyler</h1>
                <p>a versatile developer</p>
            </div>
            <div id="image">
                <img src={avt} alt={'Tyler'}/>
            </div>
            <div id="wave-container">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>
        </section>
    );
};

export default Intro;
import './style.scss';

const About = () => {
    const skills = [
        {
            'time': 'Nov 2020',
            'title': 'Windows Form .NET',
            'detail': 'I have self-studied to build an application run on .NET, known how to connect to SQL Server by Entity Framework'
        },
        {
            'time': 'Mar 2021',
            'title': 'HTML and CSS',
            'detail': 'I have learn very basic HTML and CSS on freeCodeCamp.org and built some simple projects'
        },
        {
            'time': 'Apr 2021',
            'title': 'Android Java',
            'detail': 'This is one of the most fascinated things I\'ve learnt, I developed lots of projects, know how to apply (both third-part\'s and my own) RESTful API by some related libraries (Retrofit, OkHttp, Picasso...)'
        },
        {
            'time': 'May 2021',
            'title': 'JavaScript, PHP and MySQL',
            'detail': 'I seriously realized the importance of JavaScript in a web app, used JQuery to make an AJAX request. I learnt basically about software architecture, especially MVC pattern, then I manipulated it into the current project'
        },
        {
            'time': 'Jul 2021',
            'title': 'ReactJS',
            'detail': 'My portfolio is the first ever project that I build based on ReactJS'
        }
    ];

    return (
        <section id="about">
            <div id="timeline">
                <h1>Skills as timeline</h1>
                <div className="center-line" />
                {
                    skills.map((value, index) => {
                        const side = (index % 2 === 0) ? 'left' : 'right';
                        return (
                            <div className={"row row-" + side}>
                                <div className="content">
                                    <div className="circle" />
                                    <h3>{value['title']}</h3>
                                    <p>{value['detail']}</p>
                                </div>
                                <h4>{value['time']}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default About;
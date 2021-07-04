import './style.scss';

const About = () => {
    return (
      <section id="about">
          <div id="timeline">
              <div className="center-line"></div>
              <div className="row row-1">
                  <section>
                      <div className="circle"></div>
                      <div className="details">
                          <h3>Title 1</h3>
                          <h4>January 2021</h4>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <div className="bottom">
                          <a href="#">Read more</a>
                          <i>Test</i>
                      </div>
                  </section>
              </div>
              <div className="row row-2">
                  <section>
                      <div className="circle"></div>
                      <div className="details">
                          <h3>Title 1</h3>
                          <h4>January 2021</h4>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <div className="bottom">
                          <a href="#">Read more</a>
                          <i>Test</i>
                      </div>
                  </section>
              </div>
          </div>
      </section>
    );
};

export default About;
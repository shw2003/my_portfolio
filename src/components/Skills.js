import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "styles.css";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section classNameName="skill" id="skills">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-12">
            <div classNameName="skill-bx wow zoomIn">
              <h2>Skills</h2>
             <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">Spring Framework</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Microservices</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>

                     <div className="progress-bar">
                        <p className="prog-title">Kafka</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Design Patterns</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">System Design</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJs</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>

                    <div className="progress-bar">
                        <p className="prog-title">Java</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Angular JS</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Data Structure & Algorithm</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">GIT/GITHUB</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Docker</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                     <div className="progress-bar">
                        <p className="prog-title">Linux</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Kubernetes</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Jenkins CI/CD</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">MYSQL</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">MongoDB</p>
                        <div className="progress-con">
                            <p className="prog-text">55%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">AWS</p>
                        <div className="progress-con">
                            <p className="prog-text">55%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">C/C++</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <p className="prog-text">55%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
      <img classNameName="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

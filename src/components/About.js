import { Container, Row, Col } from "react-bootstrap";
import githubIcon from "../assets/img/github.svg";
import linkedinIcon from "../assets/img/linkedin.svg";
import insIcon from "../assets/img/instagram.svg";
import youtubeIcon from "../assets/img/Youtube.svg";
import biliIcon from "../assets/img/bili.svg";
import pxIcon from "../assets/img/500px.svg";

export const About = () => {

    return (
        <Container id="about">
            <Row>
                <div className="about-title">
                    <p>About Me</p>
                </div>
                <div className="about-info">
                    <p>I'm Tongyi, a passionate Data Analyst, Web Developer, Photographer, and Marathon runner.<br></br><br></br>As a data analyst, I thrive on turning complex data sets into actionable insights. I'm skilled in data visualization, statistical analysis, and using programming languages such as Python and R to make sense of data. I love exploring data and discovering trends that can help businesses make informed decisions.<br></br><br></br>As a web developer, I enjoy creating beautiful, functional websites that provide an excellent user experience. I'm proficient in HTML, CSS, JavaScript, and various web development frameworks, and I enjoy staying up-to-date with the latest web technologies.<br></br>When I'm not analyzing data or building websites, you can find me behind the lens of a camera. Photography is my creative outlet, and I love capturing beautiful moments and telling stories through my photographs.<br></br><br></br>I'm also an avid marathon runner. I love the challenge of training for a marathon and the feeling of accomplishment that comes with crossing the finish line.</p>
                </div>
            </Row>
        </Container>
    )
}
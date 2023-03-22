import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import githubIcon from "../assets/img/github.svg";
import linkedinIcon from "../assets/img/linkedin.svg";
import insIcon from "../assets/img/instagram.svg";
import biliIcon from "../assets/img/bili.svg";
import youtubeIcon from "../assets/img/Youtube.svg";
import pxIcon from "../assets/img/500px.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <div className="footer-followme">
                        <p>Follow</p>
                    </div>
                    <div className="social-icon">
                        <a href="https://github.com/Bryan-Kan" target = "_blank"><img src={githubIcon} alt="githubIcon" /></a>
                        <a href="https://www.linkedin.com/in/tongyi-kan-5240b9123/" target = "_blank"><img src={linkedinIcon} alt="linkedinIcon" /></a>
                        <a href="https://www.instagram.com/tongyi.kan/" target = "_blank"><img src={insIcon} alt="insIcon" /></a>
                        <a href="https://www.youtube.com/channel/UCmjXpIt0DYEROo4cI3KFqHg" target = "_blank"><img src={youtubeIcon} alt="youtubeIcon" /></a>
                        <a href="https://space.bilibili.com/24069528" target = "_blank"><img src={biliIcon} alt="biliIcon" /></a>
                        <a href="https://500px.com/p/kanty1" target = "_blank"><img src={pxIcon} alt="pxIcon" /></a>
                    </div>
                    <p>Copyright 2023. All Rights Reserved</p>
                </Row>
            </Container>
        </footer>
    )
}

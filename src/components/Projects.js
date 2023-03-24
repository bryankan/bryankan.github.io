import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";

import N1 from "../assets/img/Gallery/Nature/N1.jpg";
import N2 from "../assets/img/Gallery/Nature/N2.jpg";
import N3 from "../assets/img/Gallery/Nature/N3.jpg";

import AN1 from "../assets/img/Gallery/Animals/An1.jpg";
import AN2 from "../assets/img/Gallery/Animals/An2.jpg";
import AN3 from "../assets/img/Gallery/Animals/An3.jpg";

import A1 from "../assets/img/Gallery/Architecture/A1.jpg";
import A2 from "../assets/img/Gallery/Architecture/A2.jpg";
import A3 from "../assets/img/Gallery/Architecture/A3.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {

    const Nature = [
        {
            title: "Lake Erie",
            imgUrl: N1,
        },
        {
            title: "Death Valley National Park",
            imgUrl: N2,
        },
        {
            title: "Great Smoky Mountains National Park",
            imgUrl: N3,
        },
    ];

    const Architecture = [
        {
            title: "The Centre Pompidou, Paris",
            imgUrl: A1,
        },
        {
            title: "Hudson Yards, New York",
            imgUrl: A2,
        },
        {
            title: "Westminster Hall, London",
            imgUrl: A3,
        },
    ];

    const Animals = [
        {
            title: "Turtle",
            imgUrl: AN1,
        },
        {
            title: "Bighorn sheep",
            imgUrl: AN2,
        },
        {
            title: "Western gray squirrel",
            imgUrl: AN3,
        },
    ];

    return (
        <section className="project" id="gallery">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Gallery</h2>
                                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Nature</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Architecture</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Animals</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        Nature.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        Architecture.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        Animals.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

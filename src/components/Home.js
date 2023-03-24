import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Hi! I am Tongyi Kan" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (updatedText === '') {
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={14} md={8} xl={7}>
                    </Col>
                    <Col xs={10} md={4} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h3><span className="txt-rotate" dataperiod="1000" data-rotate='[ "Hi! I am Tongyi Kan" ]'><span className="wrap">{text}</span></span></h3>
                                    <p>
                                    Data Analyst<br />
                                    Web Developer<br />
                                    Photographer<br />
                                    Marathoner<br />
                                    </p>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfFyUMXEVo7UijYFHdUELHqQvlpd54ibuzU_KY19xh62w4Bg/viewform?usp=sf_link" target="_blank">Let’s Connect <ArrowRightCircle size={25} /></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

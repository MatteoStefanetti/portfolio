import 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="hf-custom-bg">
            <p className={"h5"}>Contact me</p>
            <Container fluid>
                <ul className="nav justify-content-center list-unstyled d-flex my-3">
                    <li className="ms-3">
                        <a href="mailto:matteo.stefanetti99+work@gmail.com" className="text-body-secondary" target="_blank">
                            <Image src="https://img.icons8.com/?size=100&id=8hI2F6VeSGwK&format=png&color=000000" className="bi" alt="mail me" height="35" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/MatteoStefanetti" target="_blank">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github profile" height="35" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/matteo-stefanetti/" target="_blank">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="linkedin" height="35" />
                        </a>
                    </li>
                </ul>
                <Row>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

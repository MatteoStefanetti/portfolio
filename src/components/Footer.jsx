import 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="hf-custom-bg text-on-green">
            <p className={"h5"}>Contact me</p>
            <Container fluid id="contact">
                <ul className="nav justify-content-center list-unstyled d-flex my-3">
                    <li className="ms-3">
                        <a href="mailto:matteo.stefanetti99+work@gmail.com" className="text-body-secondary" target="_blank">
                            <i className="fa-regular fa-envelope text-on-green" style={{fontSize: '35px'}}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/MatteoStefanetti" target="_blank">
                            <i className="devicon-github-original text-on-green" style={{fontSize: '35px'}}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/matteo-stefanetti/" target="_blank">
                            <i className="devicon-linkedin-plain text-on-green" style={{fontSize: '35px'}}></i>
                        </a>
                    </li>
                </ul>
            </Container>
        </footer>
    );
};

export default Footer;

import 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import WhoAmI from "./contents/WhoAmI.jsx";

const logos = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg'];

const Content = () => {
    return (
            <Container fluid={true} className="content-bg flex-grow-1 py-5">
                <Stack gap={4}>
                    <WhoAmI />
                    <Container>
                        <Row>
                            {Array.from({ length: logos.length }).map((_, i) => (
                                <Col key={i}>
                                    <Container fluid>
                                        <Image src={logos[i]} />
                                    </Container>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Stack>
            </Container>
    );
};

export default Content;

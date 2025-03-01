import 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

const logos = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg'];

const Devicons = () => {
    return(
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
    )
}

export default Devicons;
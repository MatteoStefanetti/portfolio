import 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

const logos = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg'];

const Devicons = () => {
    return(
        <Container>
            <Row className="d-flex justify-content-between my-3">
                {Array.from({ length: logos.length }).map((_, i) => (
                    <Col xs={6} sm={3} xl={1} key={i} className="d-flex justify-content-center my-2">
                        <Container fluid className="border border-1 rounded-4 p-1 border-success d-flex justify-content-center align-items-center" style={{width: "100px"}}>
                            <Image className="rounded-4" width="100px" src={logos[i]} />
                        </Container>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Devicons;
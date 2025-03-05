import 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const marker = 'https://github.com/';
const projectsLink = ['https://github.com/MatteoStefanetti/JavaSpringBootServerTWeb23',
    'https://github.com/MatteoStefanetti/MainExpressServer',
    'https://github.com/Marco-Skiavone/SecondExpressServerTweb23'];

const Projects = () => {
    return (
        <Container>
            <p className="h1">Projects</p>
            <Container>
                <Row className="row-cols-2">
                    {Array.from({length: projectsLink.length}).map((_, i) => (
                        <Col key={i}>
                            <Card className="my-3">
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        {projectsLink[i].slice(projectsLink[i].indexOf(marker) + marker.length)}
                                    </Card.Title>
                                    <Button variant="primary" href={projectsLink[i]} target="_blank">See Project</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;
import 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const marker = 'https://github.com/';
const projectsLink = ['https://github.com/MatteoStefanetti/JavaSpringBootServerTWeb23',
    'https://github.com/MatteoStefanetti/MainExpressServer',
    'https://github.com/Marco-Skiavone/SecondExpressServerTweb23'];

const imagePath = 'images/';
const projectsImg = ['Project1.jpg', 'Project2.jpg', 'Project3.jpg'];

const Projects = () => {
    return (
        <Container>
            <p className="h1">Projects</p>
            <Container id="projects">
                <Row>
                    {Array.from({length: projectsLink.length}).map((_, i) => (
                        <Col key={i} className="col-12 col-md-6">
                            <Card className="my-3 p-0" data-aos="flip-right">
                                <Card.Body>
                                    <Card.Img src={imagePath + projectsImg[i]}></Card.Img>
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
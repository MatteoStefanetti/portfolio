import 'react';
import {Container, Image} from "react-bootstrap";

const Content = () => {
    return (
            <Container fluid={true} className="content-bg flex-grow-1">
                <Container fluid>
                    <Image src="public/images/Profile.webp" roundedCircle alt="My Image" className="border border-5" height="300"></Image>
                </Container>
                <p>Qui va il contenuto della pagina.</p>
            </Container>
    );
};

export default Content;

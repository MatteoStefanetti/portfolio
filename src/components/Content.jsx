import 'react';
import {Container, Image} from "react-bootstrap";
import WhoAmI from "./contents/WhoAmI.jsx";

const Content = () => {
    return (
            <Container fluid={true} className="content-bg flex-grow-1">
                <WhoAmI />
                <Container>

                </Container>
            </Container>
    );
};

export default Content;

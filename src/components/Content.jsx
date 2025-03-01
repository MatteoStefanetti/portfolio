import 'react';
import {Container, Stack} from "react-bootstrap";
import WhoAmI from "./contents/WhoAmI.jsx";
import Devicons from "./contents/Devicons.jsx";



const Content = () => {
    return (
            <Container fluid={true} className="content-bg flex-grow-1 py-5">
                <Stack gap={4}>
                    <WhoAmI />
                    <Devicons />
                </Stack>
            </Container>
    );
};

export default Content;

import 'react';
import {Container, Stack} from "react-bootstrap";
import WhoAmI from "./contents/WhoAmI.jsx";
import Devicons from "./contents/Devicons.jsx";
import Projects from "./contents/Projects.jsx";



const Content = () => {
    return (
            <Container fluid className="content-bg flex-grow-1 py-5">
                <Stack gap={4}>
                    <WhoAmI />
                    <Devicons />
                    <Projects />
                </Stack>
            </Container>
    );
};

export default Content;

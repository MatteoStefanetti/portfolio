import 'react';
import {Container, Stack} from "react-bootstrap";
import WhoAmI from "./contents/WhoAmI.jsx";
import Devicons from "./contents/Devicons.jsx";



const Content = () => {
    return (
            <Container fluid className="content-bg flex-grow-1 py-5">
                <Stack gap={4}>
                    <WhoAmI />
                    <Devicons />
                    <Container>
                        <p className="h1">Projects</p>
                    </Container>
                </Stack>
            </Container>
    );
};

export default Content;

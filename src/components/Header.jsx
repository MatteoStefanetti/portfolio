import "react";
import {Container, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar sticky={"top"} expand={"lg"} className="hf-custom-bg">
            <Container fluid={true}>
                <Navbar.Brand href="/">Matteo Stefanetti</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
import "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar sticky={"top"} expand={"lg"} className="hf-custom-bg">
            <Container fluid={true}>
                <Navbar.Brand href="/" className="text-primary-emphasis">Matteo Stefanetti</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#devicons">Dev Technology</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
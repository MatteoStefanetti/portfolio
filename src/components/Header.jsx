import "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar sticky={"top"} expand={"lg"} className="hf-custom-bg">
            <Container fluid={true}>
                <Navbar.Brand href="/" className="text-on-green">Matteo Stefanetti</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#devicons" className="text-on-green">Dev Technology</Nav.Link>
                        <Nav.Link href="#projects" className="text-on-green">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="text-on-green">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
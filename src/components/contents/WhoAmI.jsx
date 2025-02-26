import 'react'
import {Container, Image} from "react-bootstrap";

const WhoAmI = () => {
    return (
        <Container fluid>
            <Image src="public/images/Profile_matteo3.jpeg" roundedCircle alt="My Image" className="border border-5" height="300"></Image>
        </Container>
    )
}

export default WhoAmI;
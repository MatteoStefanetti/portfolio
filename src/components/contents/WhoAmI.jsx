import 'react'
import {Container, Image} from "react-bootstrap";

const WhoAmI = () => {
    return (
        <Container fluid className="d-flex justify-content-center">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card rounded-circle">
                            <Image src="images/Profile_matteo3.jpeg" className="card-img rounded-circle" />
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="card rounded-circle h-100 w-100">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="card-title">Hi, I&#39;m Matteo Stefanetti</p>
                                <p className="card-text">I&#39;m a backend programmer and I&#39;ve studied at University of Turin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default WhoAmI;
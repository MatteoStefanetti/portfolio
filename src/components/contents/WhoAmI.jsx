import 'react'
import {Container, Image} from "react-bootstrap";

const WhoAmI = () => {
    return (
        <Container>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card rounded-circle">
                            <Image src="images/Profile_matteo3.jpeg" className="card-img rounded-circle" />
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="card rounded-circle">
                            <div className="card-body">
                                <p className="card-title">Hi, I&#39;m Matteo Stefanetti</p>
                                <p className="card-text">I&#39;m a backend programmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default WhoAmI;
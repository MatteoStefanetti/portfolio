import {useState} from "react";
import {Container, Image} from "react-bootstrap";

function WhoAmI() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <Container fluid className="d-flex justify-content-center" id="whoAmI"  data-aos="fade-left">
            <div className="flip-card" onClick={handleFlip}>
                <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                    <div className="flip-card-front">
                        <div className="card rounded-circle p-1 card-green-border">
                            <Image src="images/Profile_matteo3.jpeg" className="card-img rounded-circle" />
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="card rounded-circle h-100 w-100 p-1 card-green-border">
                            <div className="card-body rounded-circle d-flex flex-column justify-content-center content-bg">
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
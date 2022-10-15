import { Container, Col, Row, Button } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        paddingTop: "7px",
        fontFamily: "Arial",
        height: "40px",

    };

    const navigate = useNavigate();


    return (
        <Button variant="Primary" style={mystyle} onClick={()=>{navigate("/bbeginers")}}>
            <Container>
                <Row>
                    <Col>
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </Col>
                    <Col>
                        <p>Back</p>
                    </Col>
                </Row>
            </Container>
        </Button>
    )
}

export default BackButton
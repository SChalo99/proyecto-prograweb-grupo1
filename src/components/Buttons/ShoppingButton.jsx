import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Row, Button } from 'react-bootstrap'

const ShoppingButton = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "blueviolet",
        paddingTop: "7px",
        fontFamily: "Arial",
        height: "40px"
      };
    return(
        <Button variant="Primary" style={mystyle} >
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Col>
                    <Col>
                        <p>Checkout</p>
                    </Col>
                </Row>
            </Container>
        </Button>
    )
}

export default ShoppingButton
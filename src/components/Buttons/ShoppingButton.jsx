import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'

const ShoppingButton = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "blueviolet",
        paddingTop: "7px",
        fontFamily: "Arial",
        height: "40px"
      };

      const navigate = useNavigate();
      const {order_id} = useParams() 
    return(
        <Button variant="Primary" style={mystyle} onClick={()=>{navigate("/checkout/"+{order_id}.order_id)}}>
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
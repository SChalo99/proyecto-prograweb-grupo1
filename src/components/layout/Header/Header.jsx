
import Col from 'react-bootstrap/Col';
import '../estilos.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';

const Header =()=>{
    return(
        <div className='header'>
            <Container>
                <Row>
                <Col xs lg="9">
                    <Nav className="justify-content-left" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home"><h5>Home</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1"><h5>About</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2"><h5>Support</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2"><h5>Review</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2"><h5>Ranking</h5></Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col xs lg="3">
                    <Nav className="justify-content-center" activeKey="/home">
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                    </Nav>
                </Col>
                </Row>
            </Container>
            </div>
    )
}
export default Header
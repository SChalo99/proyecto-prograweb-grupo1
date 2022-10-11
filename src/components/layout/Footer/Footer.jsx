import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import '../estilos.css';

const Footer =()=>{
    return(
        <Container>
            <Row>
                <Col xs lg="5">
                    <h4>Sign up to our newsletter fot the lastest PC news.</h4><br />
                    <input type='text' placeholder="Ingresa tu correo"/>
                    <button type="button">SUBSCRIBIRSE </button><br />
                </Col>
                <Col xs lg="7">
                    <Container>
                        <Row>
                            <Col>
                                
                                <Nav.Link href="/home"><p>Build your PC</p></Nav.Link>
                                <Nav.Link eventKey="link-1"><p>Why Redux</p></Nav.Link>
                                <Nav.Link eventKey="link-2"><p>Support</p></Nav.Link>

                            </Col>
                            <Col>
                                <Nav.Link href="/home"><p>Good.</p></Nav.Link>
                                <Nav.Link eventKey="link-1"><p>Better.</p></Nav.Link>
                                <Nav.Link eventKey="link-2"><p>Best.</p></Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="/home"><p>Terms & conditions</p></Nav.Link>
                                <Nav.Link eventKey="link-1"><p>Privacy Policy</p></Nav.Link>
                                <Nav.Link eventKey="link-2"><p>Refund Policy</p></Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
            <div className='logos'>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="egg-outline"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
            </Row>
            <div className='endtext'>
            Copyright @ 2022 Build Redux. All Rights Reserved.
            </div>    
        </Container>
    )
}
export default Footer
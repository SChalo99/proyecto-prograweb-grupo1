import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import facebook from '../Logo/facebook.png';
import twitter from '../Logo/twitter.png';
import instagram from '../Logo/instagram.png';

const Footer =()=>{
    const h4f= {
        color: "aliceblue",
        fontSize: "16px",
    };
    const button1 = {
        backgroundColor: "#c25be9",
        border: "none",
        color: "white",
        padding: "8px 12px",
        textAlign: "left",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        marginLeft: "15px",
        borderRadius: "8px",
        
    }
    const img ={
        marginLeft: "0%",
        marginTop: "5px",
        marginRight: "25px",
    };
    const pf ={
        color: "white",
        fontSize: "12px",
    }
    const endtext = {
        textAlign: "center",
        color: "white",
        fontSize: "10px",
    }
    const logos ={
        marginTop: "15px",
        marginBottom: "20px",
        color: "white",
        textAlign: "left",
    };
    return(
        <Container>
            <Row>
                <Col xs lg="5">
                    <h4 style={h4f}>Sign up to our newsletter fot the lastest PC news.</h4><br />
                    <form action="">
                        <input type='text' placeholder="Ingresa tu correo"/>
                        <button type="submit" style={button1}>SUBSCRIBIRSE </button><br />
                    </form>
                    
                </Col>
                <Col xs lg="7">
                    <Container>
                        <Row>
                            <Col>
                                
                                <Nav.Link href="Home"><p style={pf}>Build your PC</p></Nav.Link>
                                <Nav.Link eventKey="WhyRedux"><p style={pf}>Why Redux</p></Nav.Link>
                                <Nav.Link eventKey="Support"><p style={pf}>Support</p></Nav.Link>

                            </Col>
                            <Col>
                                <Nav.Link href="Good"><p style={pf}>Good.</p></Nav.Link>
                                <Nav.Link eventKey="Better"><p style={pf}>Better.</p></Nav.Link>
                                <Nav.Link eventKey="Best"><p style={pf}>Best.</p></Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="Terms & conditions"><p style={pf}>Terms & conditions</p></Nav.Link>
                                <Nav.Link eventKey="RefundPolicy"><p style={pf}>Privacy Policy</p></Nav.Link>
                                <Nav.Link eventKey="RefundPolicy"><p style={pf}>Refund Policy</p></Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
            <div style={logos}>
                <a href="https://www.facebook.com"><img style={img} src={facebook} width="20" height="20" className="logo" alt="" /></a>
                <a href="https://twitter.com"><img style={img} src={twitter} width="20" height="20" className="logo" alt="" /></a>
                <a href="https://instagram.com"><img style={img} src={instagram} width="20" height="20" className="logo" alt="" /></a>
            </div>
            </Row>
            <div style={endtext}>
            Copyright @ 2022 Build Redux. All Rights Reserved.
            </div>    
        </Container>
    )
}
export default Footer
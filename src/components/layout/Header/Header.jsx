
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import search from '../Logo/search.png';
import user from '../Logo/user.png';
import buy from '../Logo/buy.png';
const Header =()=>{
    const header = {
        marginTop: "20px",
    };
    const h5f ={
        color: "aliceblue",
        marginLeft: "15px",
        marginBottom: "20px",
        fontSize: "medium",
    };
    const img ={
        marginLeft: "0%",
        marginTop: "5px",
        marginRight: "10px",
    };
    return(
        <div style={header}>
            <Container>
                <Row>
                <Col xs lg="9">
                    <Nav className="justify-content-left" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home"><h5 style={h5f}>Home</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="/About"><h5 style={h5f}>About</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/opciones"><h5 style={h5f}>Support</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Review"><h5 style={h5f}>Review</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Ranking"><h5 style={h5f}>Ranking</h5></Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col xs lg="3">
                    <Nav className="justify-content-center" activeKey="/home">
                    <a href="Search"><img style={img} src={search} width="30" height="30" className="logo" alt="" /></a>
                    <a href="Search"><img style={img} src={user} width="30" height="30" className="logo" alt="" /></a>
                    <a href="Search"><img style={img} src={buy} width="30" height="30" className="logo" alt="" /></a>
                    </Nav>
                </Col>
                </Row>
            </Container>
            </div>
    )
}
export default Header
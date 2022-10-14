
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Col from 'react-bootstrap/Col';
import logo from './Logo/logo-2.png';


function Layout(props) {
    const main = {
        height: "100%",
        width: "100%",
    };
    const img ={
        marginTop: "20px",
        marginLeft: "5%",
    };
    const div1 = { 
        backgroundColor: "#343f4b",
        margin: "0%",
        height: "auto",
        width:"auto",
        overflow: "hidden",
    };
    const div2 = { 
        textAlign: "left",
        alignItems: "left",

    };


    return (
        <div style={main}>
            <div style={div1}>
            <Row>
                <Col xs lg="4">
                    <div style={div2}>
                    <a href="Home"><img style={img} src={logo} width="40" height="40" className="logo" alt="" /></a>
                    </div>
                </Col>
                <Col xs lg="8"><Header/></Col>
            </Row>
            <Row>
                {props.main}
            </Row>
            </div>
            </div>
    );
}
export default Layout
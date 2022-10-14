
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Footer from './Footer';
import Col from 'react-bootstrap/Col';
import logo from './Logo/logo-2.png';


function Layout(props) {
    const main = {
        height: "100%",
        width: "100%",
    };
    const div1 = { 
        backgroundColor: "#343f4b",
        margin: "0%",
        height: "auto",
        width:"auto",
        overflow: "hidden",
    };
    const div2 = { 
        backgroundImage: "url(https://thumbs.dreamstime.com/b/wireframe-landscape-wire-wireframe-terrain-lines-landscape-design-wireframe-landscape-wire-wireframe-terrain-lines-landscape-146299852.jpg)",
        backgroundPosition: "0% 75%",
    };

    const div3 = { 
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        margin: "0%",
        height: "auto",
        width: "auto",
        overflow: "hidden",
        paddingTop: "2%",
        paddingLeft: "2%",
    };
    const img ={
        marginTop: "20px",
        marginLeft: "0%",
        textAlign: "left"
    };
    return (
        <div style={main}>
            <div style={div1}>
            <Row>
                <Col xs lg="4">
                    <img style={img} src={logo} width="200" height="200" className="logo" alt="" />
                </Col>
                <Col xs lg="8"><Header/></Col>
            </Row>
            <Row>
                {props.main}
            </Row>
            </div>
            <div style={div2}>
                <div style={div3}>
                    <Row>
                        <Footer/>
                    </Row>
                </div>
            </div>
            </div>
    );
}
export default Layout
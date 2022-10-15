
import Row from 'react-bootstrap/Row';
import Footer from './Footer';


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
        marginTop: "200px"
    };
    return (
        <div style={main}>
            <div style={div1}>
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
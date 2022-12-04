
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const His7=(item)=>{
    const btnHome = {
        backgroundColor:"#c25be9",
        border: "none",
        color: "white",
        padding: "8px 50px",
        textAlign: "left",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        marginLeft: "15px",
        marginBottom: "100px",
        borderRadius: "8px",};
        const transparente ={
            alignItems: "center",
            textAlign: "center",
            padding: "0%",
            height: "400px",
            backgroundColor: "rgba(255, 255, 255,0.25)",
            width: "340px",
        };
        
        const pag7 ={

            alignItems: "center",
            textAlign: "center",
            paddingLeft: "15%",
            paddingRight: "15%",
            paddingTop: "5%",
        
        };
    return(
        <div style={pag7}>
            <Row>
                <Col>
                    <div style={transparente}>
                            <img src={item.imagen} alt="" /><br />
                            <button href="AdvancedBuilding" style={btnHome}>
                                Add to the car
                            </button>
                    </div>
                </Col>
                <Col>
                    {item.specs}
                </Col>
            </Row>
        </div>
    )
}
export default His7

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const His7=()=>{
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
        const img ={
            margin: "25px",
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
                        <img style={img} mg width="270" height="285" src="data:image/png;base64,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" alt="" /> <br />
                            <button href="AdvancedBuilding" style={btnHome}>
                                Add to the car
                            </button>
                    </div>
                </Col>
                <Col>
                    <img className='img7' mg width="340" height="400" src="https://www.servethehome.com/wp-content/uploads/2020/12/MSI-RTX-3070-Ventus-3x-OC-Specifications.jpg" alt="" />
                </Col>
            </Row>
        </div>
    )
}
export default His7
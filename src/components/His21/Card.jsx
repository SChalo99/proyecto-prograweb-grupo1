import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const card1={
    marginTop: "30px",
    margin: "auto",
    width: "400px",
    height: "450px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "0%",
    marginBottom: "15px",
};

const divcard={
    backgroundImage: "url(https://img.freepik.com/free-vector/white-technology-background_23-2148403819.jpg)",
    backgroundPosition: "0% 75%",
    width: "400px",
    height: "100px",
    backgroundColor: "rgba(116, 116, 116, 0.15)",
    marginBottom: "15px",
    overflow: "hidden",
    marginTop: "0%",
};




//
//
//
//
const Card=(props)=>{
    return(
        <div style={card1}>
                    {props.video}
                    
                    <div style={divcard}>
                        <Row>
                            <Col sm={2}>
                             {props.comilla1}
                            </Col>
                            <Col sm={7}> 
                            
                            {props.text}
                            
                            </Col>
                            <Col sm={2}>
                                {props.comilla2}
                                </Col>
                        </Row>
                    </div>
                        <Row>
                            <Col sm={2}>
                            
                            {props.canal}
                            

                            </Col>
                            <Col> 
                            {props.ncanal}
                            {props.cuadrado}
                            {props.descrition}
                            </Col>
                        </Row>
                
                </div>
    )
}
export default Card
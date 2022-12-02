import { Card, Container, Row, Col } from "react-bootstrap"

const mystyle = {
    width: "60px",
    height: "60px",
    padding: "1x"
};

const border = {
    border: "1px solid black",
    marginTop: "8px",
}
const imagen = {
    display: "flex",
    width: "15%",
    textAlign: "center",
    alignItems: "center"
}
const nombre = {
    textAlign: "left",
    marginRight: "20px",
    marginTop: "15px",
    width: "75%",
    alignItems: "center",
    fontSize: "x-large"
}
const precio = {
    textAlign: "left",
    marginTop: "15px",
    width: "15%",
    fontSize: "x-large"
}
const PerifericCard = (props) => {
    const { srcimg, namep, preciop } = props;
    <Card style={border}>
        <Card.Body>
            <Container>
                <Row>
                    <Col style={imagen}>
                        <img src={srcimg} alt="" style={mystyle}>
                        </img>
                    </Col>
                    <Col xs={5} style={nombre}>
                        {namep}
                    </Col>
                    <Col style={precio}>
                        {preciop}
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
}

export default PerifericCard
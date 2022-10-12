import { Card, Container, Row, Col } from "react-bootstrap"
import "./rankingperiferic.css"
import headset from "../../assets/headset.png"
import keyboard from "../../assets/keyboard.png"
import mousepad from "../../assets/mousepad.png"
import mousepadXL from "../../assets/mousepadXL.png"

const RankingPeriferic = () => {
    const containerTitulo = {
        marginLeft: "-255px",
        marginTop: "30px"
    }
    const containerOpciones = {
        marginLeft: "-100px",
        marginTop: "20px"
    }
    const mystyle = {
        width: "60px",
        height: "60px",
        padding: "1x"
    };

    const border = {
        border: "1px solid black",
        marginTop: "8px",
    }
    const containerStyle = {
        width: "70%",
        marginLeft: "-50px"
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
        width: "75%"
    }
    const precio = {
        textAlign: "left",
        width: "15%"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <div class="contenedor_titulo">
                    <h1>Ranking best sellers periferics</h1>
                </div>
            </Row>
            <Row style={containerOpciones}>
                <Container style={containerStyle}>
                    <Row>
                        <Col>
                            <Row>
                                <Card style={border}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col style={imagen}>
                                                    <img src={headset} alt="" style={mystyle}>
                                                    </img>
                                                </Col>
                                                <Col xs={5} style={nombre}>
                                                    <p>Headset</p>
                                                </Col>
                                                <Col style={precio}>
                                                    <p>$25</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card style={border}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col style={imagen}>
                                                    <img src={keyboard} alt="" style={mystyle}>
                                                    </img>
                                                </Col>
                                                <Col xs={5} style={nombre}>
                                                    <p>Mouse & keyboards</p>
                                                </Col>
                                                <Col style={precio}>
                                                    <p>$39</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card style={border}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col style={imagen}>
                                                    <img src={mousepad} alt="" style={mystyle}>
                                                    </img>
                                                </Col>
                                                <Col xs={5} style={nombre}>
                                                    <p>Standard mouse pad</p>
                                                </Col>
                                                <Col style={precio}>
                                                    <p>$19</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card style={border}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col style={imagen}>
                                                    <img src={mousepadXL} alt="" style={mystyle}>
                                                    </img>
                                                </Col>
                                                <Col xs={5} style={nombre}>
                                                    <p>XL mouse pad</p>
                                                </Col>
                                                <Col style={precio}>
                                                    <p>$29</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                            
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default RankingPeriferic
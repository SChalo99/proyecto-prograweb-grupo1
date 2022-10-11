import { Card, Col, Container, Row } from "react-bootstrap"
import { TrashButton, ShoppingButton } from "../Buttons"
import keyboard from "../../assets/keyboard.png"
import intel from "../../assets/Intel.png"
import Nvidia from "../../assets/Nvidia.png"
import nvme from "../../assets/nvme.png"
import cooler from "../../assets/cooler.png"
import controller from "../../assets/controller.png"

const ListProduct = () => {
    const mystyle = {
        width: "50px",
        height: "50px",
        padding: "10x"
    };

    const border = {
        border: "1px solid black",
        marginTop: "10px",
    }
    const containerStyle = {
        width: "45%",
        marginLeft: "50px",
    }

    const titleStyle = {
        color: "white"
    }

    return (
            <Container style={containerStyle}>
                <Row>
                    <Col style={titleStyle}>
                        <h2>Shopping car items</h2>
                    </Col>
                    <Col>
                        <ShoppingButton />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                        <Card style={border}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                            <img src={keyboard} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>Keyboard & mouse bundle</p>
                                        </Col>
                                        <Col>
                                            <p>$39</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
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
                                        <Col>
                                            <img src={intel} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>INTEL CORE I7-12700F 12-CORE</p>
                                        </Col>
                                        <Col>
                                            <p>$359</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
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
                                        <Col>
                                            <img src={Nvidia} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>NVIDIA GEFORCE RTX 3070 8GB (VR READY)</p>
                                        </Col>
                                        <Col>
                                            <p>$679</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
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
                                        <Col>
                                            <img src={nvme} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>1TB NVME M.2</p>
                                        </Col>
                                        <Col>
                                            <p>$99</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
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
                                        <Col>
                                            <img src={cooler} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>COOLER MASTER TD500 RGB</p>
                                        </Col>
                                        <Col>
                                            <p>$99</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
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
                                        <Col>
                                            <img src={controller} alt="" style={mystyle}>
                                            </img>
                                        </Col>
                                        <Col xs={5}>
                                            <p>BUILD + SETUP + TESTING + WARRANTY</p>
                                        </Col>
                                        <Col>
                                            <p>$99</p>
                                        </Col>
                                        <Col>
                                            <TrashButton />
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default ListProduct
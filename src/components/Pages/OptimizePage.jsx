import { Container, Col, Row } from 'react-bootstrap'
import { BackButton, ShoppingButton } from "../Buttons"
import keyboard from "../../assets/keyboard.png"
import intel from "../../assets/Intel.png"
import Nvidia from "../../assets/Nvidia.png"
import nvme from "../../assets/nvme.png"
import cooler from "../../assets/cooler.png"
import controller from "../../assets/controller.png"
import Card from 'react-bootstrap/Card';

const OptimizePage = () => {
    const titleStyle = {
        color: "white",
        float: "left"
    }
    const gapStyle = {
        width: "400px",
        marginLeft: "468px"
    }

    const mainImg = {
        height: "500px",
        marginTop: "80px",
        marginBottom: "80px",
        paddingRight: "250px"
    }

    const subTitle = {
        marginTop: "50px",
    }

    const mystyle = {
        width: "50px",
        height: "50px",
        padding: "10x"
    };

    const borderBottom = {
        borderBottom: "1px solid black"
    }

    const card = {
        backgroundImage: "linear-gradient(180deg, blue 10%, green 100%)",
        color: "white"
    }

    const margin = {
        marginRight: "10px"
    }

    const card2 = {
        backgroundColor: "gray",
        color: "white"
    }

    return (
        <Container>
            <Row >
                <Col >
                    <h1 style={titleStyle}>Your optimized build!</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <Row>
                    <Col xs={4}>
                        <img src={cooler} alt="" style={mainImg} />
                    </Col>
                    </Row>
                    <Row style={margin}>
                        <Card style={card2}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                    <Col>
                                        <Row>
                                            <p>Component price</p>
                                        </Row>
                                        <Row>   
                                            <h4>$ 1899</h4>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <p>Build Fee</p>
                                        </Row>
                                        <Row>   
                                            <h4>$ 99</h4>
                                        </Row>
                                    </Col>     
                                    </Row>
                                </Container>    
                            </Card.Body> 
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <Row style={gapStyle}>
                        <Col>
                            <BackButton />
                        </Col>
                        <Col>
                            <ShoppingButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={subTitle}>
                            <Row>
                                <Col>
                                    <h3 style={titleStyle}>Components</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Card style={card}> 
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body style={borderBottom}>
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
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default OptimizePage
import { Container, Col, Row } from 'react-bootstrap'
import { BackButton, ShoppingButton } from "../Buttons"
import cooler from "../../assets/cooler.png"
import Card from 'react-bootstrap/Card';
import data from './data'

const OptimizePage = () => {
    //Styles
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
        marginTop: "30px",
    }

    const mystyle = {
        width: "50px",
        height: "50px",
        padding: "10x"
    };

    const borderBottom = {
        borderBottom: "1px solid black",
        height: "97px"
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
    //Data

    var productos = []
    var parejas = []
    for (var i = 0; i <= data.length; i++) {
        if (parejas.length <= 1) {
            parejas.push(data[i])
        } else {
            productos.push(parejas)
            parejas = []
            parejas.push(data[i])
        }
    }
    console.log(data.length)
    console.log(productos)
    const products = productos.map(item => {
        return (
            <Row key={item[0].id}>
                <Col>
                    <Card.Body style={borderBottom}>
                        <Container>
                            <Row>
                                <Col>
                                    <img src={item[0].image} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={6}>
                                    <p>{item[0].name}</p>
                                </Col>
                                <Col>
                                    <p>{item[0].price}</p>
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
                                    <img src={item[1].image} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={6}>
                                    <p>{item[1].name}</p>
                                </Col>
                                <Col>
                                    <p>{item[1].price}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Col>
            </Row>
        )
    })

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
                                        {products}
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
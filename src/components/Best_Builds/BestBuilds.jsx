import { ListGroup, Accordion, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from 'react';
import rankingbuilds from '../../api/rankingbuilds.js'
const BestBuilds = () => {
    const container = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "90px"
    }
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "60px",
        marginBottom: "30px",
        textAlign: "left",
        color: "white"
    }
    const acordion = {
        width: "80%",
        height: "100%",
        border: "none"
    }
    const mystyle = {
        width: "60px",
        height: "60px",
        padding: "1x"
    };
    const imagen = {
        display: "flex",
        width: "15%",
        textAlign: "center",
        alignItems: "center"
    }
    const nombre = {
        marginRight: "20px",
        marginTop: "15px",
        width: "75%",
        textAlign: "left",
        alignItems: "center",
        fontSize: "x-large"
    }
    const precio = {
        textAlign: "left",
        marginTop: "15px",
        width: "15%",
        fontSize: "x-large"
    }
    const filaLista = {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: "75%",
        paddingLeft: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "x-large",
        backgroundImage: "linear-gradient(180deg, blue 10%, green 100%)",
        color: "white"
    }
    const acordionpart = {
        border: "none",
        marginTop: "10px"
    }
    const partes = {
        padding: "0px",
        backgroundColor: "#282c34",
        border: "none"
    }

    const [products, setproducts] = useState([]);

    const productos = async () => {
        const productosresponse = await rankingbuilds.getAllArmado();
        setproducts(productosresponse.data)
        console.log(products)
    };

    useEffect(() => {
        productos()

    }, []);

    const accordions = products.map((item) => {
        return (
            <Accordion.Item eventKey={item.id} style={acordionpart}>
                <Accordion.Header
                ><Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={item.description} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {item.name}
                            </Col>
                            <Col style={precio}>
                                {item.price}
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Header>
                <Accordion.Body style={partes}>
                    <ListGroup>
                        {item.prearmadoproductos.map((producto) => {
                            return (
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={producto.product.description} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                {producto.product.name}
                                            </Col>
                                            <Col style={precio}>
                                                ${producto.product.price}
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            )
                        })}

                    </ListGroup>

                </Accordion.Body>
            </Accordion.Item>
        )
    });
    return (
        <Container style={container}>
            <Row style={containerTitulo}>
                <h1>Ranking best sellers builds</h1>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0" style={acordion}>
                    {accordions}
                </Accordion>
            </Row>
        </Container>
    );
}

export default BestBuilds
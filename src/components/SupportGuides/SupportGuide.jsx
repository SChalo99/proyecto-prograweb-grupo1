import { Card, Col, Container, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import reset from "../../assets/reset.png"
import laptop from "../../assets/laptop.png"
import settings from "../../assets/settings.png"
import measure from "../../assets/measure.png"
const SupportGuide = () => {
    const containerTitulo = {
        marginTop: "30px",
        paddingLeft: "50px",
        paddingTop: "20px",
        textAlign: "left",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "300%"
    }

    const containerOpciones = {
        marginTop: "40px",
        marginLeft: "140px",
        width: "100%"
    }
    const filaLista = {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: "75%",
        paddingLeft: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "x-large"
    }

    const p = {
        margin: "15px"
    }
    const icons_tabla = {
        height: "30px",
        width: "30px"
    }
    const containerStyle = {
        width: "80%",
        marginLeft: "0px",
    }

const title = {
    float: "left",
}

return (
    <Container style={containerStyle}>
        <Row style={containerTitulo}>
            <Col>
                <h1 style={title}>Support Guides</h1>    
            </Col> 
        </Row>
        <Row style={containerOpciones}>
            <ListGroup>
                <ListGroup.Item style={filaLista}>
                    <img src={laptop} style={icons_tabla} alt=""></img>
                    <p style={p}>Build Redux Quick Start Guide</p>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <img src={laptop} style={icons_tabla} alt=""></img>
                    <p style={p}>System Overview</p>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <img src={settings} style={icons_tabla} alt=""></img>
                    <p style={p}>Troubleshooting - Display</p>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <img src={reset} style={icons_tabla} alt=""></img>
                    <p style={p}>Reaseting Guide - Memory</p>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <img src={reset} style={icons_tabla} alt=""></img>
                    <p style={p}>Reaseting Guide - Graphics Card</p>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <img src={measure} style={icons_tabla} alt=""></img>
                    <p style={p}>Realignment Guide - Rear I/O</p>
                </ListGroup.Item>
            </ListGroup>
        </Row>
    </Container>
)
}

export default SupportGuide
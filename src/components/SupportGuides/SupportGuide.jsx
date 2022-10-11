import { Card, Col, Container, Row } from "react-bootstrap"
import "./supportguide.css"
import ListGroup from 'react-bootstrap/ListGroup';
import reset from "../../assets/reset.png"
import laptop from "../../assets/laptop.png"
import settings from "../../assets/settings.png"
import measure from "../../assets/measure.png"
const SupportGuide = () => {
    const containerTitulo = {
        marginLeft: "-320px",
        marginTop: "30px"
    }
    const containerOpciones = {
        marginLeft: "-100px",
        marginTop: "40px"
    }
    const filaLista = {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: "75%",
        paddingLeft: "30px"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <div class="contenedor_titulo">
                    <h1 class="titulo">Support Guides</h1>
                </div>
            </Row>
            <Row style={containerOpciones}>
                <ListGroup>
                    <ListGroup.Item style={filaLista}>
                        <img src={laptop} class="icons_tabla"></img>
                        <p>Build Redux Quick Start Guide</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={laptop} class="icons_tabla"></img>
                        <p>System Overview</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={settings} class="icons_tabla"></img>
                        <p>Troubleshooting - Display</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={reset} class="icons_tabla"></img>
                        <p>Reaseting Guide - Memory</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={reset} class="icons_tabla"></img>
                        <p>Reaseting Guide - Graphics Card</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={measure} class="icons_tabla"></img>
                        <p>Realignment Guide - Rear I/O</p>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    )
}

export default SupportGuide
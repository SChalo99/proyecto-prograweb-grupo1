import {Container, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import cash from "../../assets/cash.png"
import cancel from "../../assets/cancel.png"
import warranty from "../../assets/warranty.png"
import refund from "../../assets/refund.png"
import paquete from "../../assets/package.png"
import tierra from "../../assets/earth.png"
import pantalla from "../../assets/screen.png"

const CommonQuestions = () => {
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
        marginLeft: "140px"
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
    return (
        <Container style={containerStyle}>
            <Row style={containerTitulo}>
                <h1 class="titulo">Common Questions</h1>
            </Row>
            <Row style={containerOpciones}>
                <ListGroup>
                    <ListGroup.Item style={filaLista}>
                        <img src={refund} style={icons_tabla} alt=""></img>
                        <p style={p}>Refund Policy</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={cancel} style={icons_tabla} alt=""></img>
                        <p style={p}>Cancellation Policy</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={warranty} style={icons_tabla} alt=""></img>
                        <p style={p}>Warranty Services</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={cash} style={icons_tabla} alt=""></img>
                        <p style={p}>Financing</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={paquete} style={icons_tabla} alt=""></img>
                        <p style={p}>How long will it take for my PC to arrive?</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={tierra} style={icons_tabla} alt=""></img>
                        <p style={p}>Do you ship internationally?</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={pantalla} style={icons_tabla} alt=""></img>
                        <p style={p}>Do you setup and isntall Windows, drivers, etc?</p>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    )
}

export default CommonQuestions
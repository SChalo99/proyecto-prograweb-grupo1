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
                    <h1 class="titulo">Common Questions</h1>
                </div>
            </Row>
            <Row style={containerOpciones}>
                <ListGroup>
                    <ListGroup.Item style={filaLista}>
                        <img src={refund} class="icons_tabla"></img>
                        <p>Refund Policy</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={cancel} class="icons_tabla"></img>
                        <p>Cancellation Policy</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={warranty} class="icons_tabla"></img>
                        <p>Warranty Services</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={cash} class="icons_tabla"></img>
                        <p>Financing</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={paquete} class="icons_tabla"></img>
                        <p>How long will it take for my PC to arrive</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={tierra} class="icons_tabla"></img>
                        <p>Do you ship internationally?</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={filaLista}>
                        <img src={pantalla} class="icons_tabla"></img>
                        <p>Do you setup and isntall Windows, drivers, etc?</p>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    )
}

export default CommonQuestions
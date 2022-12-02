import {ListGroup, Container, Row } from "react-bootstrap"
import cash from "../../assets/cash.png"
import cancel from "../../assets/cancel.png"
import warranty from "../../assets/warranty.png"
import refund from "../../assets/refund.png"
import paquete from "../../assets/package.png"
import tierra from "../../assets/earth.png"
import pantalla from "../../assets/screen.png"
import ListGroupq from "../Componetizar/ListGroupQuestions"

const CommonQuestions = () => {
    const data = [{
        srcimg: cash,
        textp: "Refund Policy",
    },
    {
        srcimg: cancel,
        textp: "Cancellation Policy",
    },
    {
        srcimg: warranty,
        textp: "Warranty Services",
    },
    {
        srcimg: refund,
        textp: "Financing",
    },
    {
        srcimg: paquete,
        textp: "How long will it take for my PC to arrive?",
    },
    {
        srcimg: tierra,
        textp: "Do you ship internationally?",
    },
    {
        srcimg: pantalla,
        textp: "Do you setup and isntall Windows, drivers, etc?",
    }
    ]
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
    const containerStyle = {
        width: "100%",
        marginLeft: "0px",
    }
    return (
        <Container style={containerStyle}>
            <Row style={containerTitulo}>
                <h1 className="titulo">Common Questions</h1>
            </Row>
            <Row style={containerOpciones}>
                <ListGroup>
                    <ListGroupq {...data[0]} />
                    <ListGroupq {...data[1]} />
                    <ListGroupq {...data[2]} />
                    <ListGroupq {...data[3]} />
                    <ListGroupq {...data[4]} />
                    <ListGroupq {...data[5]} />
                    <ListGroupq {...data[6]} />
                </ListGroup>
            </Row>
        </Container>
    )
}

export default CommonQuestions
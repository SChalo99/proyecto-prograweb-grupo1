import { ListGroup, Col, Container, Row } from "react-bootstrap"
import reset from "../../assets/reset.png"
import laptop from "../../assets/laptop.png"
import settings from "../../assets/settings.png"
import measure from "../../assets/measure.png"
import Listgroupt from "../Componetizar/ListGroupGuide"

const SupportGuide = () => {
    const data = [{
        srcimg: laptop,
        textp: "Build Redux Quick Start Guide",
    },
    {
        srcimg: laptop,
        textp: "System Overview",
    },
    {
        srcimg: settings,
        textp: "Troubleshooting - Display",
    },
    {
        srcimg: reset,
        textp: "Reaseting Guide - Memory",
    },
    {
        srcimg: reset,
        textp: "Reaseting Guide - Graphics Card",
    },
    {
        srcimg: measure,
        textp: "Realignment Guide - Rear I/O",
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
        marginLeft: "140px",
        width: "100%"
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
                <Listgroupt {...data[0]} />
                <Listgroupt {...data[1]} />
                <Listgroupt {...data[2]} />
                <Listgroupt {...data[3]} />
                <Listgroupt {...data[4]} />
                <Listgroupt {...data[5]} />
            </ListGroup>
        </Row>
    </Container>
)
}

export default SupportGuide
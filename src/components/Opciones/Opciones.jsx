import "./opciones.css"
import Badge from 'react-bootstrap/Badge';
import book from "../../assets/book.png"
import ticket from "../../assets/ticket.png"
import FAQ from "../../assets/FAQ.png"
import { Container, Row, Col } from "react-bootstrap";
const Opciones = () => {
    const containerTitulo = {
        marginLeft: "70px",
        marginTop: "30px",
        padding: "30px"
    }
    const title = {
        float: "left",
        color: "white"
    }
    const containerOpciones = {
       margin: "auto",
       gap: "40px",
       color: "white"
    }
    const img = {
        height: "100px",
         width: "100px",
        marginBottom: "35px"
    }

    const opciones = {
    height: "280px",
    width: "280px",
    padding: "40px",
    backgroundColor: "rgb(73, 70, 70)",
    textAlign: "center",
    alignItems: "center",
    margin: "0px auto",
    }

    return (
        <Container>
            <Row style={containerTitulo}>
                <Col>
                    <h1 style={title}>Support Guides</h1>
                </Col>
            </Row>
            <Row style={containerOpciones}>
                    <Col style={opciones}>
                        <img src={book} style={img} alt=""></img>
                        <h2>Guides</h2>
                    </Col>
                    <Col style={opciones}>
                        <img src={FAQ} style={img} alt=""></img>
                        <h2>FAQ</h2>
                    </Col> 
                    <Col style={opciones}>
                        <img src={ticket} style={img} alt=""></img>
                        <h2>Submit Ticket</h2>
                    </Col>
            </Row>
        </Container>
    )
}

export default Opciones
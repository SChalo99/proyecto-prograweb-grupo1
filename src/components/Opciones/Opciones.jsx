import book from "../../assets/book.png"
import ticket from "../../assets/ticket.png"
import FAQ from "../../assets/FAQ.png"
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const Opciones = () => {
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "30px",
        padding: "30px"
    }
    const title = {
        float: "left",
        color: "white"
    }
    const containerOpciones = {
        margin: "auto",
        marginTop: "50px",
        gap: "60px",
        color: "white",
        width: "80%"
    }
    const img = {
        height: "100px",
         width: "100px",
        marginBottom: "35px"
    }

    const opciones = {
    height: "280px",
    width: "10px",
    padding: "40px",
    backgroundColor: "rgb(73, 70, 70)",
    textAlign: "center",
    alignItems: "center",
    margin: "0px auto",
    cursor: "pointer"
    }
    const navigate = useNavigate();
    return (
        <Container >
            <Row style={containerTitulo}>
                <Col>
                    <h1 style={title}>Support Hub</h1>
                </Col>
            </Row>
            <Row style={containerOpciones}>
                    <Col style={opciones} onClick={() => {navigate("/support")}}>
                        <img src={book} style={img} alt=""></img>
                        <h2>Guides</h2>
                    </Col>
                    <Col style={opciones} onClick={() => {navigate("/preguntas")}}>
                        <img src={FAQ} style={img} alt=""></img>
                        <h2>FAQ</h2>
                    </Col> 
                    <Col style={opciones} onClick={() => {navigate("/ticket")}}>
                        <img src={ticket} style={img} alt=""></img>
                        <h2>Submit Ticket</h2>
                    </Col>
            </Row>
        </Container>
    )
}

export default Opciones
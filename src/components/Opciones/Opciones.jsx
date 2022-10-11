import "./opciones.css"
import Badge from 'react-bootstrap/Badge';
import book from "../../assets/book.png"
import ticket from "../../assets/ticket.png"
import FAQ from "../../assets/FAQ.png"
import { Container, Row } from "react-bootstrap";
const Opciones = () => {
    const containerTitulo = {
        marginLeft: "-230px",
        marginTop: "30px"
    }
    const containerOpciones = {
       margin: "auto"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <div class="contenedor_titulo">
                    <h1 class="titulo">Support Guides</h1>
                </div>
            </Row>
            <Row style={containerOpciones}>
                <div class="contenedor-opciones">
                    <div class="opciones">
                        <img src={book} class="icons"></img>
                        <h2>Guides</h2>
                    </div>
                    <div class="opciones">
                        <img src={FAQ} class="icons"></img>
                        <h2>FAQ</h2>
                    </div>
                    <div class="opciones">
                        <img src={ticket} class="icons"></img>
                        <h2>Submit Ticket</h2>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Opciones
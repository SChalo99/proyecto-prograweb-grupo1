import { Card, Container, Row, Col } from "react-bootstrap"
import headset from "../../assets/headset.png"
import keyboard from "../../assets/keyboard.png"
import mousepad from "../../assets/mousepad.png"
import mousepadXL from "../../assets/mousepadXL.png"
import "./bestbuild.css"
const BestBuilds = () => {
    const containerTitulo = {
        marginLeft: "-255px",
        marginTop: "30px"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <div class="contenedor_titulo">
                    <h1>Ranking best sellers periferics</h1>
                </div>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default BestBuilds
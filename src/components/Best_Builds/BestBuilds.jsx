import { Card, Container, Row, Col } from "react-bootstrap"
import headset from "../../assets/headset.png"
import keyboard from "../../assets/keyboard.png"
import mousepad from "../../assets/mousepad.png"
import mousepadXL from "../../assets/mousepadXL.png"
import "./bestbuild.css"
const BestBuilds = () => {
    const containerTitulo = {
        marginTop: "30px",
        textAlign: "left",
        padding: "30px",
        marginLeft: "70px"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <h1>Ranking best sellers periferics</h1>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default BestBuilds
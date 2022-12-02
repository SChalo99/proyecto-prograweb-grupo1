import { Container, Row, Col } from "react-bootstrap"
import Cardt from "../Componetizar/PerifericCard"

const RankingPeriferic = () => {
    const data = [{
        namep: "Headset",
        srcimg: "img",
        preciop: "$25"
    },
        {
        namep: "Mouse & keyboards",
        srcimg: "img/keyboard.png",
        preciop: "$39"
    },
    {
        namep: "Standard mouse pad",
        srcimg: "img/mousepad.png",
        text: "$19"
    },
    {
        namep: "XL mouse pad",
        srcimg: "img/mousepadXL.png",
        text: "$29"
    }
    ]
    const container = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "50px"
    }
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "30px",
        textAlign: "left",
        color: "white"
    }
    const containerOpciones = {
        marginLeft: "65px",
        marginTop: "20px"
    }
    const containerStyle = {
        width: "70%",
        marginLeft: "-50px"
    }

    return (
        <Container style={container}>
            <Row style={containerTitulo}>
                    <h1>Ranking best sellers periferics</h1>
            </Row>
            <Row style={containerOpciones}>
                <Container style={containerStyle}>
                    <Row>
                        <Col>
                            <Row>
                                <Cardt {...data[0]} />
                            </Row>
                            <Row>
                                <Cardt {...data[1]} />
                            </Row>
                            <Row>
                                <Cardt {...data[2]} />
                            </Row>
                            <Row>
                                <Cardt {...data[3]} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default RankingPeriferic
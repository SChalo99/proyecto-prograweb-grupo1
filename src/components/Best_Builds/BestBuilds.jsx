import { Accordion, Container, Row } from "react-bootstrap"
import Accordiont from "../Componetizar/AccordionBuild"

const BestBuilds = () => {
        const data = [{
            eventk: "0",
            pcgamer: "img/pcgamer.png",
            nampc: "Monster PC",
            precipc: "$1889",
            intelcore: "img/intelcore.png",
            corename: "Intel Core I9-12700F 12-Core",
            coreprice: "$339",
            nvidia2: "img/nvidia2.png",
            graficname: "NVIDIA geforce RTX 3070 8GB (VR READY)",
            graficprice: "$599",
            DDR4: "img/DDR4.png",
            DDR4name: "16GB DDR4 dual channel",
            DDR4price: "$79",
            SSD: "img/SSD.png",
            SSDname: "1TB NVME M.2",
            SSDprice: "$99",
            cool: "img/cool.png",
            coolname: "CM MasterLiquid ML240L",
            coolprice: "$99",
            fan: "img/fan.png",
            fanname: "QTY 4X CM MasterFans RGB",
            fanprice: "$49",
            gamercase: "img/pcgamer.",
            gamercasename: "Cooler Master TD5000 RGB",
            gamercaseprice: "$129",
            fuente: "img/fuente.png",
            fuentename: "700W ATX 80 Plus Gold",
            fuenteprice: "$89",
            motherb: "img/motherb.png",
            motherbname: "Asus B660 Series | Intel",
            motherbprice: "$149"
        },
        {
            eventk: "1",
            pcgamer: "img/pcgamer.png",
            nampc: "Cruiser Build",
            precipc: "$1759",
            intelcore: "img/intelcore.png",
            corename: "Intel Core I9-12700F 12-Core",
            coreprice: "$339",
            nvidia2: "img/nvidia2.png",
            graficname: "NVIDIA geforce RTX 3070 8GB (VR READY)",
            graficprice: "$599",
            DDR4: "img/DDR4.png",
            DDR4name: "16GB DDR4 dual channel",
            DDR4price: "$79",
            SSD: "img/SSD.png",
            SSDname: "1TB NVME M.2",
            SSDprice: "$99",
            cool: "img/cool.png",
            coolname: "CM MasterLiquid ML240L",
            coolprice: "$99",
            fan: "img/fan.png",
            fanname: "QTY 4X CM MasterFans RGB",
            fanprice: "$49",
            gamercase: "img/pcgamer.",
            gamercasename: "Cooler Master TD5000 RGB",
            gamercaseprice: "$129",
            fuente: "img/fuente.png",
            fuentename: "700W ATX 80 Plus Gold",
            fuenteprice: "$89",
            motherb: "img/motherb.png",
            motherbname: "Asus B660 Series | Intel",
            motherbprice: "$149"
        },
        {
            eventk: "2",
            pcgamer: "img/pcgamer.png",
            nampc: "Nasa PC",
            precipc: "$1679",
            intelcore: "img/intelcore.png",
            corename: "Intel Core I9-12700F 12-Core",
            coreprice: "$339",
            nvidia2: "img/nvidia2.png",
            graficname: "NVIDIA geforce RTX 3070 8GB (VR READY)",
            graficprice: "$599",
            DDR4: "img/DDR4.png",
            DDR4name: "16GB DDR4 dual channel",
            DDR4price: "$79",
            SSD: "img/SSD.png",
            SSDname: "1TB NVME M.2",
            SSDprice: "$99",
            cool: "img/cool.png",
            coolname: "CM MasterLiquid ML240L",
            coolprice: "$99",
            fan: "img/fan.png",
            fanname: "QTY 4X CM MasterFans RGB",
            fanprice: "$49",
            gamercase: "img/pcgamer.",
            gamercasename: "Cooler Master TD5000 RGB",
            gamercaseprice: "$129",
            fuente: "img/fuente.png",
            fuentename: "700W ATX 80 Plus Gold",
            fuenteprice: "$89",
            motherb: "img/motherb.png",
            motherbname: "Asus B660 Series | Intel",
            motherbprice: "$149"
        },
        {
            eventk: "3",
            pcgamer: "img/pcgamer.png",
            nampc: "Budget Build",
            precipc: "$1299",
            intelcore: "img/intelcore.png",
            corename: "Intel Core I9-12700F 12-Core",
            coreprice: "$339",
            nvidia2: "img/nvidia2.png",
            graficname: "NVIDIA geforce RTX 3070 8GB (VR READY)",
            graficprice: "$599",
            DDR4: "img/DDR4.png",
            DDR4name: "16GB DDR4 dual channel",
            DDR4price: "$79",
            SSD: "img/SSD.png",
            SSDname: "1TB NVME M.2",
            SSDprice: "$99",
            cool: "img/cool.png",
            coolname: "CM MasterLiquid ML240L",
            coolprice: "$99",
            fan: "img/fan.png",
            fanname: "QTY 4X CM MasterFans RGB",
            fanprice: "$49",
            gamercase: "img/pcgamer.",
            gamercasename: "Cooler Master TD5000 RGB",
            gamercaseprice: "$129",
            fuente: "img/fuente.png",
            fuentename: "700W ATX 80 Plus Gold",
            fuenteprice: "$89",
            motherb: "img/motherb.png",
            motherbname: "Asus B660 Series | Intel",
            motherbprice: "$149"
        }]
    const container = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "90px"
    }
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "60px",
        marginBottom: "30px",
        textAlign: "left",
        color: "white"
    }
    const acordion = {
        width: "80%",
        height: "100%",
        border: "none"
    }
    return (
        <Container style={container}>
            <Row style={containerTitulo}>
                <h1>Ranking best sellers builds</h1>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0" style={acordion}>
                    <Accordiont {...data[0]} />
                    <Accordiont {...data[1]} />
                    <Accordiont {...data[2]} />
                    <Accordiont {...data[3]} />
                </Accordion>
            </Row>
        </Container>
    )
}

export default BestBuilds
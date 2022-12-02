import { ListGroup, Accordion, Container, Row, Col } from "react-bootstrap"

const mystyle = {
    width: "60px",
    height: "60px",
    padding: "1x"
};
const imagen = {
    display: "flex",
    width: "15%",
    textAlign: "center",
    alignItems: "center"
}
const nombre = {
    marginRight: "20px",
    marginTop: "15px",
    width: "75%",
    textAlign: "left",
    alignItems: "center",
    fontSize: "x-large"
}
const precio = {
    textAlign: "left",
    marginTop: "15px",
    width: "15%",
    fontSize: "x-large"
}
const filaLista = {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "75%",
    paddingLeft: "30px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "x-large",
    backgroundImage: "linear-gradient(180deg, blue 10%, green 100%)",
    color: "white"
}
const acordionpart = {
    border: "none",
    marginTop: "10px"
}
const partes = {
    padding: "0px",
    backgroundColor: "#282c34",
    border: "none"
}
const AccordionBuild = (props) => {
    const { eventk, pcgamer, nampc, precipc, intelcore, corename, coreprice, nvidia2, graficname, graficprice, DDR4, DDR4name, DDR4price, SSD, SSDname, SSDprice, cool, coolname, coolprice, fan, fanname, fanprice, gamercase, gamercasename, gamercaseprice, fuente, fuentename, fuenteprice, motherb, motherbname, motherbprice } = props;
    return(
    <Accordion.Item eventKey={eventk} style={acordionpart}>
        <Accordion.Header
        ><Container>
                <Row>
                    <Col style={imagen}>
                        <img src={pcgamer} alt="" style={mystyle}>
                        </img>
                    </Col>
                    <Col xs={5} style={nombre}>
                        {nampc}
                    </Col>
                    <Col style={precio}>
                        {precipc}
                    </Col>
                </Row>
            </Container>
        </Accordion.Header>
        <Accordion.Body style={partes}>
            <ListGroup>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={intelcore} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {corename}
                            </Col>
                            <Col style={precio}>
                                {coreprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={nvidia2} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {graficname}
                            </Col>
                            <Col style={precio}>
                                {graficprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={DDR4} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {DDR4name}
                            </Col>
                            <Col style={precio}>
                                {DDR4price}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={SSD} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {SSDname}
                            </Col>
                            <Col style={precio}>
                                {SSDprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={cool} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {coolname}
                            </Col>
                            <Col style={precio}>
                                {coolprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={fan} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {fanname}
                            </Col>
                            <Col style={precio}>
                                {fanprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={gamercase} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {gamercasename}
                            </Col>
                            <Col style={precio}>
                                {gamercaseprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={fuente} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {fuentename}
                            </Col>
                            <Col style={precio}>
                                {fuenteprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item style={filaLista}>
                    <Container>
                        <Row>
                            <Col style={imagen}>
                                <img src={motherb} alt="" style={mystyle}>
                                </img>
                            </Col>
                            <Col xs={5} style={nombre}>
                                {motherbname}
                            </Col>
                            <Col style={precio}>
                                {motherbprice}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
        </Accordion.Item>
    )
}
export default AccordionBuild
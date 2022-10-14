import { Card, Col, Container, Row } from "react-bootstrap"
import { TrashButton, ShoppingButton } from "../Buttons"
import data from "./data"
import { useState } from 'react';

const ListProduct = () => {

    //Styles
    const mystyle = {
        width: "50px",
        height: "50px",
        padding: "10x"
    };

    const border = {
        border: "1px solid black",
        marginTop: "10px",
    }
    const containerStyle = {
        width: "45%",
        marginLeft: "50px",
    }

    const titleStyle = {
        color: "white"
    }
    //DATA
    const [data2, updateData] = useState(data);
    function handleRemoveItem (id) {
        const newList = data2.filter((item) => item.id !== id);
        updateData(newList);
      };
    
    const products = data2.map((item) => {
        return (
            <Row key={item.id}>
                <Card style={border}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <img src={item.image} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={5}>
                                    <p>{item.name}</p>
                                </Col>
                                <Col>
                                    <p>{item.price}</p>
                                </Col>
                                <Col>
                                    <TrashButton item={item} onRemove={handleRemoveItem} />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        )
    });

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={8} style={titleStyle}>
                    <h2>Shopping car items</h2>
                </Col>
                <Col>
                    <ShoppingButton />
                </Col>
            </Row>
            <Row>
                <Col>
                    {products}
                </Col>
            </Row>
        </Container>
    );

}

export default ListProduct
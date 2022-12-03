import { Card, Col, Container, Row } from "react-bootstrap"
import { TrashButton, ShoppingButton } from "../Buttons"
import shoppingCart from "../../api/shoppingCarItems";
import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import OrderProduct from "../../api/orderProduct"

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
    const [data, updateData] = useState([]);
    const {order_id} = useParams()

    const loadData = async() =>{
        const productos = await OrderProduct.findProduct({order_id}.order_id)
        updateData(productos.data)
    }

    useEffect(()=>{
        loadData()
    },[])

    
    const products = data.map((item) => {
        return (
            <Row key={item.id}>
                <Card style={border}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <img src={item.product.description} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={5}>
                                    <p>{item.product.name}</p>
                                </Col>
                                <Col>
                                    <p>${item.product.price}</p>
                                </Col>
                                <Col>
                                    <TrashButton item={item} onRemove={async (id) =>{
        const remove = await shoppingCart.remove(id)
        console.log(remove)
        loadData()
      }} />
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
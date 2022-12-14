import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import OrderHistory from '../OrderHistory';
import { FifthPage } from '../Pages';



const SideBar = () => {
    // Styles
    const mystyles = {
      gap:"5px",
      marginLeft: "20px",
      marginTop:"50px"
    }

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2">
          <Row>
            <Col sm={3}>
              <ListGroup style={mystyles}>
                <ListGroup.Item action eventKey='#link1' href="#link1">
                  Order History
                </ListGroup.Item>
                <ListGroup.Item action eventKey='#link2' href="#link2">
                  Profile Info
                </ListGroup.Item>
                <ListGroup.Item action href="/login" onClick={()=>{sessionStorage.removeItem("user_id")}}>
                  Logout
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <OrderHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    <FifthPage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
}

export default SideBar
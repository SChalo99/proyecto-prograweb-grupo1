import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CommonQuestions from '../Questions';
import ListProduct from '../List';


const SideBar = () => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action eventKey='#link1' href="#link1">
                  Order History
                </ListGroup.Item>
                <ListGroup.Item action eventKey='#link2' href="#link2">
                  Profile Info
                </ListGroup.Item>
                <ListGroup.Item action href="/button">
                  Logout
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <CommonQuestions />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    <ListProduct />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
}

export default SideBar
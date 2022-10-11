
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Col from 'react-bootstrap/Col';
import logo from './Logo/logo-2.png';
import './estilos.css';

function Layout(props) {
    return (
        <div className='main'>
            <div className='div1'>
            <Row>
                <Col xs lg="4">
                <img src={logo} width="40" height="30" className="logo" alt="" />
                </Col>
                <Col xs lg="8"><Header/></Col>
            </Row>
            <Row>
                {props.main}
            </Row>
            </div>
            </div>
    );
}
export default Layout
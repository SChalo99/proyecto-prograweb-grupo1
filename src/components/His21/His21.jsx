import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const His21=()=>{
    return(
        <div className="His21">
            <h1 className='txt21'>Influencers</h1>
            <div className="card1">
                <img width="400" height="250" src="https://quotesnhumor.com/wp-content/uploads/2021/02/maxresdefault-2021-02-26T141929.634-1024x576.jpg" alt=''/><br />
                <div className='divcard'>
                    <Row>
                        <Col sm={2}>
                        <ion-icon name="alert-outline"></ion-icon>
                        </Col>
                        <Col sm={7}> <p className="cardtxt">You basically pick which game you play, which permormance you want, and It'll suggest a rig for you. They make thing much much simpler and again for only $75bucks? Okay!</p></Col>
                        <Col sm={2}>
                        <ion-icon name="alert-outline"></ion-icon>
                        </Col>
                    </Row>
                </div>
                    <Row>
                        <Col sm={2}>
                        <img src="https://yt3.ggpht.com/ytc/AMLnZu_-v2bzQCks3k_MHJNya5J_TSVpMevRw2-axtLX=s900-c-k-c0x00ffffff-no-rj" className='cardlogo' alt='' />
                        </Col>

                        <Col sm={7}> 
                        <h1 className='h1card'>SHORT CIRCUIT.</h1>
                        <div className='cuad2'>

                        </div>
                        <p className="cardtxt">Thank you for the awesome review</p>
                        </Col>
                    </Row>
               
            </div>
        </div>
    )
}
export default His21
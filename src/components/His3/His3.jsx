import {Container, Row, Col } from "react-bootstrap"

import '../layout/estilos.css';
const His3=()=>{
    return(
            <Container>
            <div>
                <h1>Build your PC!</h1><br />
                <h3>Just for what you need</h3>
            </div>
            <div className="mb-2">
            <button type="button" className='btnHome'>Build for begginers </button>
            <button type="button" className='btnHome'>Advanced building </button>

      </div>
        </Container>
    )
}
export default His3
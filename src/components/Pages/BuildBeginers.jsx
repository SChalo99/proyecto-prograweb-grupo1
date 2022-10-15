import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom"

const BuildBeginers = () => {
    const navigate = useNavigate();

    const boton = {
        padding:"0",
        margin:"0",
        height:"200px",
        width:"150px",
        borderRadius: "10%",
        border: "0",
        backgroundColor: "slategrey",
    }

    const i = {
        fontSize:"100px",
        color: "white"
    }

    const p = {
        fontSize:"20px",
        color: "white"
    }



    return <div className="bg-dark">
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mb-5" style={{ width: "50%", float: "left" }}>
                <h1 className="text-white">¿Qué necesitas?</h1>
            </div>
            <div className="mb-5" style={{ width: "50%", float: "right"}}>
                <button className="btn btn-light" style={{ width: "125px", marginRight: "15px" }} onClick={()=>{navigate("/home")}}>ATRÁS</button>
                <button className="btn btn-success" style={{ width: "125px", marginLeft: "15px" }} onClick={()=>{navigate("/optimized")}}>SIGUIENTE</button>
            </div>
        </div>
        <div style={{ height:"200px" }}>&nbsp;</div>
        <div className="container" style={{ textAlign: "center" }}> 
            <div className="row mb-5">
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-controller" style={i}></i>
                        <p style={p}>Gaming</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-pencil-square" style={i}></i>
                        <p style={p}>Diseño</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-code-slash" style={i}></i>
                        <p style={p}>Coding</p>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-house-fill" style={i}></i>
                        <p style={p}>Render</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-building" style={i}></i>
                        <p style={p}>Oficina</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" style={boton}>
                        <i className="bi bi-alt" style={i}></i>
                        <p style={p}>Otros</p>
                    </button>
                </div>
            </div>
            </div>
    </div>
}
export default BuildBeginers
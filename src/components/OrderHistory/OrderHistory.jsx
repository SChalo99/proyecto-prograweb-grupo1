import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../../assets/pc_recomendada.png"
import CPU from "../../assets/pc_comps/cpu.png"
import PLACAMADRE from "../../assets/pc_comps/placamadre.png"
import RAM from "../../assets/pc_comps/ram.png"
import REFLIQUIDA from "../../assets/pc_comps/refliquida.png"
import WINDOWS from "../../assets/pc_comps/windows.png"
import { useNavigate } from "react-router-dom"

const OrderHistory = () => {
    const navigate = useNavigate(); 
    const listaimg ={
        height: "70px",
        width: "100px",
        padding: "5px"
    } 
    const listatext = {
        color: "black",
        padding: "15px",
        textAlign: "center",
        verticalAlign: "middle"
    }
    const listapr = {
        color: "black",
        fontWeight: "bold",
        padding: "15px",
        textAlign: "center",
        verticalAlign: "middle"
    }
    const row = {
        marginBottom:"10px"
    }
    const rowFila = {
        backgroundColor: "white",
        marginBottom: "10px",
    }
    return (<div className="bg-dark">
        <div className="container" style={row}>
            <div className="row ">
                     <div className="col-8">
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={CPU} alt="CPU" /> </p>
                            </div>
                            <div className="col">
                            <p style={listatext}>INTEL CORE I7-12700F 12-CORE</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>359$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>21/09/2022</p>
                            </div>
                        </div>
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={RAM} alt="RAM" /> </p>
                            </div>
                            <div className="col">
                            <p style={listatext}>16GB DDR4 DUAL CHANNEL</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>69$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>22/09/2022</p>
                            </div>
                        </div>
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={REFLIQUIDA} alt="REF LIQUIDA" /></p>
                            </div>
                            <div className="col">
                            <p style={listatext}>CORSAIR HIDRO SERIES H100I RGB</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>89$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>23/09/2022</p>
                            </div>
                        </div>
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={PC} alt="CASE" /></p>
                            </div>
                            <div className="col">
                            <p style={listatext}>NZXT H510</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>99$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>23/09/2022</p>
                            </div>
                        </div>
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={PLACAMADRE} alt="PLACAMADRE" /></p>
                            </div>
                            <div className="col">
                            <p style={listatext}>ASUS PRIME B650M-A | INTEL</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>149$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>24/09/2022</p>
                            </div>
                        </div>
                    <div className="row fila" style={rowFila}>
                            <div className="col">
                            <p><img style={listaimg} src={WINDOWS} alt="WINDOWS" /></p>
                            </div>
                            <div className="col">
                            <p style={listatext}>WINDOWS 11 HOME + USB RECOVERY</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>120$</p>
                            </div>
                            <div className="col">
                            <p style={listapr}>27/09/2022</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
    )
}
export default OrderHistory
import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../../assets/pc_recomendada.png"
import { processor, memory, storage, cooling, windows, psupply} from "../../modules/components.js"
import { useNavigate } from "react-router-dom"
import productos_api from "../../api/productos.js"
import {useParams} from "react-router-dom"
import OrderProduct from "../../api/orderProduct"

const CustomBuild = () => {
    //Styles
    const tarjeta = {
        display: "flex",
        justifyContent:"space-between",
        height:"70px",
        alignItems: "center",
        borderRadius:"3%",
        marginBottom: "15px"
    }
    
    const tarjetaimg = {
        marginTop: "3px",
        maxHeight: "60px",
        maxWidth: "90px"
    }
    
    const tarjetaname = {
        textAlign: "left",
        width:"325px",
        fontWeight: "bold"
    }
    
    const tarjetabutton = {
        height:"100%"
    }
    
    const tarjetacompra = {
        display: "flex",
        justifyContent:"space-between",
        height:"70px",
        alignItems: "center",
        backgroundColor: "blueviolet"
    }
    
    const tarjetanamecompra = {
        textAlign: "left",
        width:"375px",
        fontWeight: "bold",
    }
    
    const tarjetapricecompra = {
        fontWeight: "bold"
    }
    

    //

    const navigate = useNavigate();
    const [itemSelec, setitemSelect] = useState(3);
    const [precioComps, setprecioComps] = useState(0);
    const [products, setProducts] = useState([])
    const [itemsAComprar, setItemsAComprar] = useState([])

    async function getProducts(id) {
        const newData = await productos_api.getAll(id)
        setProducts(newData.data)
    }

    useEffect(()=>{
        getProducts(itemSelec)
    },[])

    const crearTarjeta = (name,price,img, id) => {
        return <div className="bg-white tarjeta" style={tarjeta}>
            <img src={img} className="tarjetaimg" style={tarjetaimg} alt=""/>
            <div className="tarjetaname" style={tarjetaname}>
                {name}
            </div>
            <div>
                ${price}
            </div>
            <button className="btn btn-success tarjetabutton" onClick={
                () => {
                    setprecioComps(precioComps + price)
                    agregarCompra(name, price, img, id)
                }
            } style={tarjetabutton}>+</button>
        </div>
    }
    const listarTarjetas =  () => {
        const tarjetas = products.map((comps) => {
            return crearTarjeta(comps.name, comps.price, comps.description, comps.id)
        });
        return tarjetas
    }

    const {order_id} = useParams()

    const agregarCompra = async (name, price, img, id) => {
        
        const body = {
            order_id: parseInt({order_id}.order_id),
            product_id: id
        }
        const newOrderProduct = await OrderProduct.create(body)
        console.log(newOrderProduct)
        const getOrderProducts = await OrderProduct.findProduct({order_id}.order_id)
        setItemsAComprar(getOrderProducts.data)
    }

    const guardarOrden = () => {
        for (let i=0;i<itemsAComprar.length;i++) {
            itemsAComprar[i].id = `${i}-${itemsAComprar[i].name}-${itemsAComprar[i].price}`
        }
        localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
    }

    const crearTarjetaCompra = (name, price, img, id) => {
        return <div>
            <div className="bg-gradient tarjetacompra p-3" style={tarjetacompra}>
                <img src={img} className="tarjetaimg" style={tarjetaimg} alt=""/>
                <div className="tarjetanamecompra" style={tarjetanamecompra}>
                    {name}
                </div>
                <div className="tarjetapricecompra" style={tarjetapricecompra}>
                    ${price}
                </div>
            </div>
            <div style={{height:"5px", backgroundColor: "black"}}></div>
        </div>
    }

    const listarTarjetasCompra = () => {
        let tarjetas = itemsAComprar.map( (comps) => {
            return crearTarjetaCompra(comps.product.name, comps.product.price, comps.product.description, comps.product.id)
        });
        return tarjetas
    }

    return <div className="bg-dark">
        <div className="container-fluid row" style={{ textAlign: "center" }}>
            <div className="mb-5 col-6">
                <h1 className="text-white">¡Arma tu propia PC!</h1>
            </div>
            <div className="mb-5 col-6">
                <button className="btn btn-light" style={{width: "125px", marginRight: "15px"}} onClick={()=>{navigate("/home")}}>ATRÁS</button>
                <button className="btn btn-success" style={{width: "125px", marginRight: "15px"}} onClick={()=>{navigate("/productos/"+{order_id}.order_id); guardarOrden()}}>
                    <i className="bi bi-cart-fill"></i> CARRITO
                </button>
            </div>
        </div>

        <div className="container-fluid row" style={{ textAlign: "center" }}>

            <div className="col-3">
                <img src={PC} style={{ height: "350px", width: "350px" }} alt="PCBANNER"/>
                <div className="container-fluid" style={{ marginTop: "20px", backgroundColor: "slategrey", width: "350px" }}>
                    <div  className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <div className="col mt-2">
                                <p style={{ color:"white" }}>Precio Componentes</p>
                                <p  style={{ color:"white" }}>${precioComps}</p>
                            </div>
                            <div className="col mt-2">
                                <p  style={{ color:"white" }}>Costo armado</p>
                                <p  style={{ color:"white" }}>$99</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="col-sm-4">
                <div className="row pb-5">
                    <button className="col m-1 btn btn-success" style={{width: "25%"}} onClick={()=>getProducts(3)} id="graphic">Gráfica</button>
                    <button className="col-2 m-1 btn btn-success" style={{width: "25%"}} onClick={()=>getProducts(4)} id="processor">Procesador</button>
                    <button className="col m-1 btn btn-success" style={{width: "25%"}} onClick={()=>getProducts(5)} id="memory">Memoria</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "40%"}} onClick={()=>getProducts(6)} id="storage">Almacenamiento</button>
                    <button className="col-1 m-1 btn btn-success" style={{width: "33%"}} onClick={()=>getProducts(7)} id="cooling">Ventilación</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "30%"}} onClick={()=>getProducts(8)} id="windows">Windows</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "33%"}} onClick={()=>getProducts(9)} id="psupply">Fuente poder</button>
                </div>
                {listarTarjetas()}
            </div>

            <div className="col-sm-4">
                {listarTarjetasCompra()}
            </div>
        </div>
    </div>
}
export default CustomBuild
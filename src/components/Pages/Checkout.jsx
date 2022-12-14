import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Applepay from "../../assets/applepay.png"
import Paypal from "../../assets/paypal.png"
import Googlepay from "../../assets/googlepay.png"
import user from "../../assets/user.png"
import { useNavigate } from "react-router-dom"
import data from "./data"

let itemsAComprar = data
const Checkout = () => {
    const navigate = useNavigate();
    const crearTarjeta = (name, price, img) => {
        console.log("asd")
        return <div className="tarjetaco" style={{display: "flex",
            justifyContent:"space-between",
            height:"70px",
            alignItems: "center",
            backgroundColor: "gray"}}>
            <img className="listaimg" style = {{height:"50px", width:"75px"}}src={img} alt="IMG"/>
            <div style={{width:"50%", float: "left"}}><p className="listatext" style={{color: "black"}}>{name}</p></div>
            <div style={{width:"25%", float: "left"}}><p className="listapr" style={{color: "black", fontWeight: "bold"}}>{price}$</p></div>
        </div>
    }

    const listarTarjetas = () => {
        let tarjetas = itemsAComprar.map( (comps) => {
            return crearTarjeta(comps.name, comps.price, comps.image)
        });
        return tarjetas
    }

    return <div className="bg-dark">
        <div className="row" style={{height:"100%"}}>
            <div className="col-7" style={{backgroundColor: "white", height:"500px"}}>
                <div className="row m-3" style={{textAlign: "center"}}>
                    <p>Express checkout</p>
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="col-3" style={{backgroundColor: "blue", borderRadius:"5%", margin:"5px"}}>
                            <img className="metpago" style={{width: "25%", marginTop: "5px"}} src={Applepay} alt="img" />
                        </div>
                        <div className="col-3" style={{backgroundColor: "yellow", borderRadius:"5%", margin:"5px"}}>
                            <img className="metpago" style={{width: "25%", marginTop: "5px"}} src={Paypal} alt="img" />
                        </div>
                        <div className="col-3" style={{backgroundColor: "black", borderRadius:"5%", margin:"5px"}}>
                            <img className="metpago" style={{width: "25%", marginTop: "5px"}} src={Googlepay} alt="img" />           
                        </div>
                    </div>
                    <p className="m-3">OR</p>
                </div>

                <h2 style={{color:"black"}}>Contact information</h2>

                <div className="row mb-3">
                    <img src={user} alt="img" style={{borderRadius:"100%", borderWidth:"2px", borderColor:"gray", width: "8%"}}/>
                    <div className="col">
                        <p>Ed Va (edjahevs@gmail.com)</p>
                        <p style={{color:"purple"}}>Log out</p>
                    </div>
                </div>

                <h2 className="mb-1" style={{color:"black"}}>Shipping address</h2>
                <form className="row rounded-1 bg-white">
                    <div className="col-md-12 text-black">
                        <label className="form-label">Country/Region</label>
                        <select className="form-select" placeholder="Guardado">
                            <option selected>United States</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-12" style={{width:"50%"}}>
                        <label className="form-label">Fist Name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col-12" style={{width:"50%"}}>
                        <label className="form-label">Last Name</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Company (optional)</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Address</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="col-12" style={{width:"33%"}}>
                        <label className="form-label">City</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="col-md-12 text-black" style={{width:"33%"}}>
                        <label className="form-label">State</label>
                        <select className="form-select" placeholder="Guardado">
                            <option selected>New York</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-12" style={{width:"33%"}}>
                        <label className="form-label">ZIP Code</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="col-12 mb-3" >
                        <label className="form-label">Phone</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="row" style={{justifyContent:"space-around"}} >
                        <div className="col" style={{textAlign:"start"}}>
                            <button type="submit" className="btn btn-danger" onClick={()=>{navigate("/productos")}}>Return to cart</button>
                        </div>
                        <div className="col" style={{textAlign:"end"}}>
                            <button type="submit" className="btn btn-success" onClick={()=>{alert('Gracias por su compra'); navigate("/StarRating2")}}>Continue to shopping</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-5">
                {listarTarjetas()}
                <div className="container row mt-3 mb-3">
                    <div className="col-10">
                        <input type="email" className="form-control" placeholder="Discount code"></input>
                    </div>
                    <div className="col-2 ml-1" style={{textAlign:"start"}}>
                        <button type="submit" className="btn btn-success" >Apply</button>
                    </div>
                </div>
                <button type="button" className="btn both3 w-100 mr-1" style={{ backgroundColor: "rgb(151, 105, 194)"}}>SHOP</button>
            </div>
        </div>
    </div>
}
export default Checkout
import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import logo from "../assets/LOGO.png"
import { useNavigate } from "react-router-dom"
import SearchButton from "./searchButton"
const Header = () => {
    const navigate = useNavigate()
    return <div className="header fs-3 bg-dark" style={ {paddingBottom : "4%"} }>
    <nav>
        <img src={logo} className="logo" />
        <ul className="nav-links">
            <li> <a href="/proyecto/">Inicio</a> </li>
            <li> <a href="">Acerca</a> </li>
            <li> <a href="/proyecto/ticket">Soporte</a> </li>
            <li> 
                <a href="">Reseñas</a> 
                <ul className="submenu">
                    <li> <a href="/proyecto/ratingusers">Usuarios</a> </li>
                    <li> <a href="/proyecto/ratinginfluencers">Influencers</a> </li>
                </ul>
            </li>
            <li> 
                <a href="">Ranking</a> 
                <ul className="submenu">
                    <li> <a href="/proyecto/rankingperipherals">Periféricos</a> </li>
                    <li> <a href="/proyecto/rankingpcs">Computadoras</a> </li>
                </ul>
            </li>
        </ul>
        <ul className="nav-icons">
            <li> <SearchButton /> </li>
            <li> <button className="btn-header" onClick={()=> {navigate("/proyecto/profileInfo")}}> <i class="bi bi-person-fill"></i> </button> </li>
            <li> <button className="btn-header" onClick={()=> {navigate("/proyecto/cart")}}> <i class="bi bi-cart-fill"></i> </button> </li>
        </ul>
    </nav>
</div>
}
export default Header
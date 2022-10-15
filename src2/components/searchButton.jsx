import { useState } from "react";
import "../styles/searchButton.css";
import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { Navigate, useNavigate } from "react-router-dom";
import {graphic, processor, memory, storage, cooling, windows, psupply} from "../modules/components.js"

 var data = require("../modules/data.json");
const Historia6 = () => {
    const [value, setValue] = useState("");
    const [activo,setActivo] = useState(false);
    const navigate = useNavigate();
    const alternarBarra = () => {
        setActivo(!activo);
    }
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const enrutarPag = (nombre) => {
    console.log("asd")
    if (nombre === "NVIDIA RTX 3070") {
        navigate("/proyecto/grafdet");
    } else if (nombre === "INTEL CORE I-5-12700F 12-CORE") {
        navigate("/proyecto/cpudet");
    } else if (nombre === "16 GB DDR4 DUAL CHANNEL") {
        navigate("/proyecto/ramdet");
    } else if (nombre === "CORSAIR HIDRO SERIES H100I RGB") {
        navigate("/proyecto/refliq");
    }
  }

  const clickLupa = () => {
  }

  return (
      <div className="search-container">
        <div className="search-inner" style={{justifyContent: "end"}}>
          <input type="text" style={{backgroundColor: "gray"}} className={"oculto" + (activo ? "mostrado" : "")} value={value} onChange={onChange} />
          <button className="btn-header"  onClick={alternarBarra}> <i class="bi bi-search"></i> </button>
        </div>
        <div className="dropdown">
          {
          data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => 
                (
              <div onClick={()=>{enrutarPag(item.name)}} className="dropdown-row" key={item.name}>
                {item.name}
              </div>))}
        </div>
      </div>);
}
export default Historia6
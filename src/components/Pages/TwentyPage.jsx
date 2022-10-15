import React from "react"
import "bootstrap/dist/css/bootstrap.css"
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>

const TwentyPage = () => {

    const bloque = {
        justifyContent: "left",
        height: "100%"
    }


    const listatitle = {
        color: "rgb(0, 0, 0)",
        fontWeight: "bold",
        textAlign: "left",
        paddingTop: "10px",
        fontSize: "large"
    }

    const listatext = {
        color: "rgb(0, 0, 0)",
        textAlign: "justify",
        paddingTop: "1px",
        fontSize:"medium",
        marginTop: "10px",
        fontWeight:"bold"
    }

    const listasubtext = {
        color: "rgb(0, 0, 0)",
        textAlign: "justify",
        marginLeft: "10px",
        marginBottom: "10px"
    }

    return <div className="bg-light">
        <div className="bloque bg-light" style={bloque}>
            <h1 className="text-black container-fluid"> User Reviews </h1>
            <div className="container-fluid pl-3">
                <div style={{display:"flex"}}>
                <p className="listatitle"  style={listatitle}>Global Rate </p > 
                <p style={{marginTop: "0.5%", marginLeft: "1%"}}>⭐</p>
                <p style={{marginTop: "0.5%", marginLeft: "1%"}}>⭐</p>
                <p style={{marginTop: "0.5%", marginLeft: "1%"}}>⭐</p>
                <p style={{marginTop: "0.5%", marginLeft: "1%"}}>⭐</p>
                <p style={{marginTop: "0.5%", marginLeft: "1%"}}>⭐</p>
                </div> 
            </div>
            <div className="container-fluid">
                <p className="listatext" style={listatext}>Juan Lopez</p>
                <p className="listasubtext" style={listasubtext}>I completely recomend this service </p>
            </div>
            <hr style={{height:"20px"}}></hr>
            <div className="container-fluid">
                <di>  <p className="listatext" style={listatext}>Jhon Doe</p></di> 
                <p className="listasubtext" style={listasubtext}>Great Service</p>
            </div>
            <hr style={{height:"20px"}}></hr>
            <div className="container-fluid">
                <div> <p className="listatext" style={listatext}>Carl Johnson</p> </div>
                <p className="listasubtext" style={listasubtext}>PC well builded and nice case quality</p>
            </div>
			<hr style={{height:"20px"}}></hr>
          </div>
    </div>
}
export default TwentyPage
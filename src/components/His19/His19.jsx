import { useState, useEffect } from 'react'
import FormularioApi from '../../api/formulario'

const His19=()=>{

    const defaultFormulario = {
        email: '',
        name: '',
        phone: 0,
        subject: '',
        descrition: ''
    }
    const [formulario, setFormulario] = useState(defaultFormulario)
    //se usa useeffect para que detecte los cambios
    useEffect(()=> {
    }, [formulario])
    //se pone lo que pasa cuando se le da click al boton
    const handleOnClick = () => {
       
        FormularioApi.post(formulario)
            .then(response => {
                console.log({response})
                alert(response.statusText)
            });
    }


    const h2 ={
        color: "aliceblue",
        marginLeft: "30px",
        marginBottom: "30px",
        
    };
    const pag19 ={

        alignItems: "center",
        textAlign: "left",
        width: "1150px",
        height: "700px",
        marginLeft: "auto",
        marginRight: "auto",
    
    };
    const request ={
        textAlign: "left",
        backgroundColor: "white",
        marginRight: "15%",
        marginLeft: "5%",
        padding: "2%",
        
    };
    const textrequest1 ={
        
        height: "25px",
        width: "780px",
        textAlign: "left",
        alignItems: "left",
    };
    const textrequest2 ={
        height: "200px",
        width: "790px",
        textAlign: "left",
        alignItems:"left",
        paddingTop: "0px",
        paddingBottom: "0px"
    };
    const btnSubmit ={
        backgroundColor: "#c25be9",
        border: "none",
        color: "white",
        padding: "5px 12px",
        textAlign: "left",
        textDecoration: "none",
        fontSize: "16px",
        marginTop: "20px",
        borderRadius: "8px",
    };
    const div1 ={
        textAlign: "left",
        marginTop: "5%",
    };
    return(
        <div style={div1}>
            <h2 style={h2}>Submit a Request</h2>
            <div style={pag19}>
                
            <div style={request}>
                <form action="">
                    <p >Email</p>
                    <input type='mail' style={textrequest1} placeholder="" value={formulario.email} 
                    onChange={e => setFormulario({...formulario, email: e.currentTarget.value})}/><br />
                    <p >Name</p>
                    <input type='text' style={textrequest1} placeholder="" value={formulario.name} 
                    onChange={e => setFormulario({...formulario, name: e.currentTarget.value})}/><br />
                    <p >Phone</p>
                    <input type='text' style={textrequest1} placeholder="" value={formulario.phone} 
                    onChange={e => setFormulario({...formulario, phone: e.currentTarget.value})}/><br />
                    <p >Subject</p>
                    <input type='text' style={textrequest1} placeholder="" value={formulario.subject} 
                    onChange={e => setFormulario({...formulario, subject: e.currentTarget.value})}/><br />
                    <p >Description</p>
                    <input type='text' style={textrequest2} placeholder="" value={formulario.descrition}
                    onChange={e => setFormulario({...formulario, descrition: e.currentTarget.value})}/><br />
                    
                    <button style={btnSubmit} type="submit" onClick={() => handleOnClick()}>Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default His19
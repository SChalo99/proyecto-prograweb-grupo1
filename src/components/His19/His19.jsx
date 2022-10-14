

const His19=()=>{


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
        paddingRight: "600px",
        textAlign: "left",
        alignItems: "left",
    };
    const textrequest2 ={
        paddingRight: "600px",
        height: "200px",
        textAlign: "left",
        alignItems:"left",
        paddingTop: "0px",
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
                    <input type='text' style={textrequest1} placeholder="" /><br />
                    <p >Name</p>
                    <input type='text' style={textrequest1} placeholder=""/><br />
                    <p >Phone</p>
                    <input type='text' style={textrequest1} placeholder="" /><br />
                    <p >Subject</p>
                    <input type='text' style={textrequest1} placeholder="" /><br />
                    <p >Description</p>
                    <input type='text' style={textrequest2} placeholder="" /><br />
                    <button style={btnSubmit} type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default His19
import {Container} from "react-bootstrap"


const His3=()=>{
    const btnHome = {
        backgroundColor:"#c25be9",
        border: "none",
        color: "white",
        padding: "8px 12px",
        textAlign: "left",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        marginLeft: "15px",
        marginBottom: "100px",
        borderRadius: "8px",};

    const His3div = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "30px",
        marginTop: "30px",
        };
    const h1f ={
        color:"aliceblue",
        marginLeft: "15px",
    };
    const h3f ={ 
        color: "aliceblue",
        marginLeft: "15px",
        marginBottom: "20px",
    };
    return(
            <Container>
            <div style={His3div}>
                <h1 style={h1f}>Build your PC!</h1><br />
                <h3 style={h3f}>Just for what you need</h3>
            </div>
            <div style={His3div}>
            <button type="button" style={btnHome}>Build for begginers </button>
            <button type="button" style={btnHome}>Advanced building </button>

      </div>
        </Container>
    )
}


export default His3
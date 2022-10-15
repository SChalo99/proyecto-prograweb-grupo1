import error from '../../assets/robot_error_404.png'

const Error404 = () => {
    const h1 = {
        fontSize: "64",
        color: "white"
    }

    const h2 = {
        fontSize: "32",
        color: "white"
    }

    const img = {
        width: "300px",
        height: "300px",
        marginLeft: "40%"
    }

    return(
        <>
            <h1 style={h1}>ERROR 404</h1>
            <h2 style={h2}>Page not found</h2>
            <img style={img} src={error} alt=""></img>
            <p style={h2}>Hicimos lo que pudimos, si jalamos, jalamos con orgullo</p>
        </>
    )
}

export default Error404
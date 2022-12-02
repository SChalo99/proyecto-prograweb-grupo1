import { ListGroup } from "react-bootstrap"
const filaLista = {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "75%",
    paddingLeft: "30px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "x-large"
}

const p = {
    margin: "15px"
}
const icons_tabla = {
    height: "30px",
    width: "30px"
}
const ListGroupQuestions = (props) => {
    const { srcimg, textp } = props;
    return (
        <ListGroup.Item style={filaLista}>
            <img src={srcimg} style={icons_tabla} alt=""></img>
            <p style={p}>{textp}</p>
        </ListGroup.Item>
    )
}
export default ListGroupQuestions
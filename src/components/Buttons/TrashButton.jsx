import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const TrashButton = ({item, onRemove}) => {
const mystyle = {
    width: "30px",
    height: "30px"
}

    return(
        <Button variant="light" onClick={() => onRemove(item.id)}><FontAwesomeIcon icon={faTrashCan} style = {mystyle} /></Button>
    )
}

export default TrashButton
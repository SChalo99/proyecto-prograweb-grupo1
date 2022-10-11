import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const TrashButton = () => {
const mystyle = {
    width: "30px",
    height: "30px"
}

    return(
        <Button variant="light"><FontAwesomeIcon icon={faTrashCan} style = {mystyle} /></Button>
    )
}

export default TrashButton
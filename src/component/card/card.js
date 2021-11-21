import { Paper } from "@mui/material"
import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import PopUp from "../astrolist/popUp/PopUp"
import { Chip } from "../cofig/config";
import { Drawer } from '@mui/material'



function Card({ card, index }) {
    const [buttonPopup, setbuttonPopup] = useState(false);
    const [popupClose, setpopupClose] = useState(false);
    const handleOpenPopUP = () => {
        setbuttonPopup(true);
        setpopupClose(true)
    }
    const handleClosePopUP = () => {
        setbuttonPopup(false);
        setpopupClose(false)
    }
    return (
        <>
            <Draggable draggableId={card.id} index={index} >
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        <Paper

                            style={{
                                width: "80%",
                                margin: "auto",
                                marginBottom: "0.5em",
                                padding: "0.2em",
                                marginTop: "0.5em"

                            }}
                        >
                            <div className="d-flex p-2 justify-content-between">
                                {card.title}
                                <span onClick={handleOpenPopUP}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </span>
                            </div>

                            {/* <Chip text="front" color="red" /> */}
                        </Paper>
                        <Drawer
                            anchor='top'
                            open={popupClose}
                            onClose={() => setpopupClose(false)}

                        >

                            <PopUp trigger={buttonPopup} setTrigger={setbuttonPopup}>
                                <div className="d-flex justify-content-between">
                                    <h3>{card.title} </h3>
                                    <span
                                        className="clear-icon"
                                        onClick={handleClosePopUP}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                        </svg>
                                    </span>
                                </div>
                            </PopUp>
                        </Drawer>


                    </div>
                )}

            </Draggable>
        </>
    )

}
export { Card }
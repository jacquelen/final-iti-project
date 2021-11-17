import {Paper,Typography} from "@mui/material"
import { Draggable } from "react-beautiful-dnd"
import {Chip} from "../cofig/config"

function Card({card ,index}){
    return(
        
       <Draggable  draggableId={card.id} index={index} >
           {(provided)=>(
        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
        <Paper 
        style={{
            width:"80%",
            margin:"auto",
            marginBottom:"0.5em",
            padding:"0.2em",
            marginTop:"0.5em"
            
        }}
        >
          {card.title}
          <Chip  text="front" color="red"/>
        </Paper>
        </div>


           )}

       </Draggable>
    )
}
export {Card}
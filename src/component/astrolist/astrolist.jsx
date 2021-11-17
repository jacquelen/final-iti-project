import React, { useContext, useState } from 'react'
import {InputBase, Typography} from "@mui/material"
import storeApi from '../uitilty/storeApi';


function Asrtolist({title ,listId}){
    const [open ,setOpen]=useState(false);
    const[newtitle,setNewtitle]=useState(title);
    const {updateListtitle}=useContext(storeApi);
    const handleOnChanges=(e)=>{
         setNewtitle(e.target.value);
    }

    const handleBlur=()=>{
        setOpen(false);
        updateListtitle(newtitle ,listId)
    }
    return(
        <>
        {open ?
        (
        <div>
            <InputBase 
            onChange={handleOnChanges}
            value={newtitle}
            autoFocus
            style={{
                background:"#ccc",
                width:"100%",
                padding:"0.5em", 
            }}
            onBlur={handleBlur}
            
            />
        </div>)
        :
        (
        <div className="row">
            <div className="col-9">
        <Typography
        onClick={()=>{setOpen(!open)}  }
        style={{
            fontSize:"1.2rem",
            fontWeight:"bold",
            padding:"0.1em"
        }}
        >
          {title}
        </Typography>


            </div>
            <div className="col-3 p-1">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
        </span>
            </div>
        </div>
        )
        }
        </>
    )

}



export {Asrtolist}
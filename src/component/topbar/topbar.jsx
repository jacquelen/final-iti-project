import { AppBar, Toolbar } from '@mui/material'
import Button from '@restart/ui/esm/Button'
import React  from 'react'



function Topbar({setOpensidemenu}){
    return(
        <>
        <AppBar
        position="static"
        style={{background:"None",padding:"0.5rem"}}
        >

            <Toolbar>
            <h2
            style={{
                flexGrow:1,
            }}
            >Daily todo</h2>

            <Button
            style={{background:"None",border:"transparent",color:"#fff",backgroundColor:"#000",padding:"0.5em",borderRadius:"0.5em"}}
             onClick={()=>setOpensidemenu(true)}
        
            >
                change background
            </Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export {Topbar}
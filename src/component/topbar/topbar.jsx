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
            <h3
            style={{
              flexGrow: 1,
            }}
          >
            {localStorage.getItem("bla")}
          </h3>

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
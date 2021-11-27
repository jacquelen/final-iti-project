import React,{ useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Taskdetail({triggers,setTriggers,taskdate ,recentdate,card,typecard,data,listId,list}){

    const [value, onChange] = useState(new Date());
    const [priority, setpriority]=useState(card.priority||"")
    // periority-----------------> local storage
    const handleChange = (event) => { 
   console.log(data)
   const selectPriority = data.lists[listId]
   for (let i = 0; i < selectPriority.cards.length; i++) {
    if (selectPriority.cards[i].id === event.target.id) {
        selectPriority.cards[i].priority = event.target.value
        selectPriority.cards[i].type = event.target.value
      }
      else console.log("shokrn gdn yasedy");
  }
   console.log(selectPriority)
        setpriority(event.target.value);
        card.priority=event.target.value
        card.typecard=event.target.value
        if(card.typecard==="LOW"){
            card.typecard="#B0E0E6"
        }
        if(card.typecard==="MEDIUM"){
                card.typecard= "#90EE90"
            }
        
        if(card.typecard==="HIGH"){
                card.typecard="#FA8072"
            }
            const newState = {
              ...data,
              lists: {
                ...data.lists,
                [listId]: selectPriority,
              },
            };
           
            localStorage.setItem("addCard", JSON.stringify(newState));
      };

    // 
    return triggers ? (
        <>
        <div className="row mt-3 ">
        <div className="col-6"
        style={{
            backfaceVisibility:" ",
            backgroundColor:"lavender",
            padding:"2rem",
            borderRadius:"0.5em"
        }}
        >
        <p className="fw-bold">-Task End Date :  </p>
         <p 
         style={{
             width:"fit-content",
             backgroundColor:"#fef68a",
             padding:"0.8em",
             borderRadius:"0.5em"
         }}
         
         ><strong>{taskdate}</strong></p>
         {/* 008bbf */}
         <p className="fw-light" style={{width:"fit-content",
         padding:"0.5em", borderRadius:"1em",
        //  dare function------------------->locale Sstorage
          backgroundColor:"#5c7a78",color:"white"}}> {(card.endday - card.srtday) < 0 ? "Enter corrcet date for this task":`you have only ${card.endday- card.srtday} days to complete this task`   }    </p>
         {/*  */}
         <div className="mt-5">
             <p className="fw-bold"> -Add priority to the card :</p>
         <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={priority}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"HIGH"} id={card.id} style={{fontWeight:"bolder",color:"#FA8072"}}  >high</MenuItem>
          <MenuItem value={"MEDIUM"}id={card.id} style={{fontWeight:"bolder",color:"#90EE90"}} >medium</MenuItem>
          <MenuItem value={"LOW"} id={card.id} style={{fontWeight:"bolder",color:"#B0E0E6"}}>low</MenuItem>
        </Select>
      </FormControl>


         </div>
     
{/* <p> {priority} </p> */}
          {/*  */}
        </div>
         <div className="col-6 text-center">
            <p className="fs-3 " >track your remaining days...</p>
            <Calendar
        onChange={onChange}
        value={value}
      />
        </div> 
        </div>
             
        {/* <p> {recentdate}</p> */} 
        </>
    ): (
        ""
      );
}


export {Taskdetail}
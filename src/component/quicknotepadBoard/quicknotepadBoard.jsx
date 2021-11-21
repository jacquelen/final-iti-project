import React, { useState } from 'react'
import {Note} from './note'
import {v4 as uuid}from "uuid"
import { Addnote } from './addnote'
import "./not.css"
import {Search} from "./search"
function QuicknotepadBoard(){
    const [notes,setNotes]=useState([
        {
         id:uuid()  ,
        text:"this is my first note",
        date:"15/11/2021"
        },
        {
            id:uuid()  ,
           text:"this is my 2 note",
           date:"15/11/2021"
        },
        {
            id:uuid()  ,
           text:"this is my 3 note",
           date:"15/11/2021"
        },
])

const [searchtext,setsearchText]=useState('')

       const addNote=(text)=>{
           console.log(text)
           const date= new Date()
           const newNote={
               id:uuid(),
               text:text,
               date:date.toLocaleDateString()
           }
           const newNotes=[...notes,newNote]
           setNotes(newNotes)
       } 

       const deleteNote=(id)=>{
          const newNotes= notes.filter((note)=>note.id !==id)
          setNotes(newNotes)

       }
    return(
        <>
        <h3 className="text-center p-3 text-secondary"> NOTEPAD </h3>
            {/* <Search handleSearchtext={setsearchText}/> */}
        <div className="notes-list p-5">
            {notes.map((note)=>(
                <Note id={note.id}  text={note.text} date={note.date} handledeleteNote={deleteNote}
                notes={notes.filter((note)=>note.text.toLocaleLowerCase().includes(searchtext)    )   }

                />
            ))}
           <Addnote handleAddNote={addNote} />
        </div>


        </>
    )
}

export{QuicknotepadBoard}
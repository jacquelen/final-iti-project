import React, { useState } from 'react'
import {unit} from "../uitilty/store"
import {Dashboard} from "../dashboard/dashboard"
import {v4 as uuid}from "uuid"
import StoreApi from '../uitilty/storeApi'
import { Inputcontainer } from '../inputcontainer/inputcontainer'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Card } from '@mui/material'

function Dashmain(){
    const [data, setDate]=useState(unit.data);
    const [cards,setCards]=useState(unit.cards)
    const addamorecard=(title,listId)=>{
        console.log(title ,"title",listId,"id")  //1
        const d=new Date()
        const newCardid=uuid()
        const newCard={
            id:newCardid,
            title:title,
            date:d.toLocaleString()
        }
        const list = data.lists[listId];
        list.cards=[...list.cards,newCard];
        const newState={
            ...data,
            lists:{
                ...data.lists,
                [listId]:list,
            },
        };
        setDate(newState);
        console.log(list,"llllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
    }
    const addMorelist=(title)=>{
         const newlistId=uuid();
         const newlist={
             id:newlistId,
             title:title,
             cards:[]
         };
         const newState={
             listIds:[...data.listIds,newlistId],
             lists:{
                 ...data.lists,
                 [newlistId]:newlist,
             }
         };

     setDate(newState)
    }
    const updateListtitle=(title ,listId)=>{
     const list= data.lists[listId];
     list.title=title;

     const newState={
         ...data,
         lists:{
             ...data.lists,
             [listId]:list,
         }
     };
     setDate(newState)
    };
// need mofification
    const updatecardtitle=(title,listId)=>{
        const list=data.lists[listId]
        console.log(list,"mmooooo")
        list.cards.title=title;
      const y  =list.cards.title
      console.log(y,"yyyyyyyyyyyyy")
        const newState={
            ...data,
            lists:{
                ...data.lists,
                [listId]:list
            }
        }
            setDate(newState)
    }
    const setdatetask=(date,listId)=>{
          const list=data.lists[listId]
        //   list.cards.taskdate=date;
        list.cards.taskdate=date;
          const d=list.cards.taskdate;

          console.log(d,"taskkkkkkkkkkkkkkk")
          const newState={
              ...data,
              lists:{
                  ...data.lists,
                  [listId]:list
              }
          }
          setDate(newState)
    }

const onDragEnd=(result)=>{
    const{destination,source,draggableId ,type}=result;
    // console.log(destination,"d",source,"s",draggableId,"id");

    if(!destination){
        return;
    }
    if(type==="list"){
        const newListId=data.listIds;
        newListId.splice(source.index,1);
        newListId.splice(destination.index,0,draggableId);
        return;
    }


    const sourceList=data.lists[source.droppableId];
    const destinationList=data.lists[destination.droppableId] ;
    const dragginCard=sourceList.cards.filter((card)=>card.id=== draggableId)[0];

    if(source.droppableId ===destination.droppableId){
        sourceList.cards.splice(source.index, 1)
        destinationList.cards.splice(destination.index,0,dragginCard)
       const newState={
           ...data,
           lists:{
               ...data.lists,
               [sourceList.id]:destinationList,
           }
       };
       setDate(newState)
    }else{
         sourceList.cards.splice(source.index,1);
         destinationList.cards.splice(destination.index,0,dragginCard)

         const newState={
             ...data,
             lista:{
                 ...data.lists,
                 [sourceList.id]:sourceList,
                 [destinationList.id]:destinationList,
             }
         };
         setDate(newState)
    }
};

    return(
        <StoreApi.Provider value={{addamorecard,addMorelist, updateListtitle,updatecardtitle,setdatetask}}>
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId="Dashmain" type="list" direction="horizontal">
                    {(provided)=>(

            <div
               style={{overflowY:"auto",minHeight:"100vh",display:"flex",padding:"1em", width:"100%",
        
            }}
               ref={provided.innerRef}
               {...provided.droppableProps}
            >
      <div className="container">
          {/* <div className="row"> */}
                <div className="d-flex align-items-start">
        {data.listIds.map((listId , index)=>{
            const list = data.lists[listId];
            console.log(list, "list//dash");
            console.log(data.lists[listId].cards,"index")
           return  <Dashboard list={list} key={listId} index={index} />

        })}
        <div className="">
        <Inputcontainer type="list"/>
        {provided.placeholder}

        </div>
        </div>
          {/* </div> */}
      </div>
      </div>


                  )}
          </Droppable>
          </DragDropContext>
        </StoreApi.Provider>

        
    )
}


export {Dashmain}

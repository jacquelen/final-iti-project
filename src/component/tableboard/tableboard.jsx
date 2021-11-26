/* eslint-disable no-lone-blocks */
import React from 'react'
// import "./tableboard.css"




function Tableboard(props){
    return (
        <>
          <div className="my-5 py-5">
          {props.location.state.listIds.map((listId , index)=>{
            const list = props.location.state.lists[listId];
          return(
            <div>
            <table className="table table-borderless table-hover m-0">
                        <thead className="">
                         <tr>
                          <th  className="table-danger w-25" >in {list.title} list with title cards   </th>
                          <th scope="col" className="text-center table-info w-25">priority</th>
                          <th scope="col" className="text-center table-warning w-25"  >Current day</th>
                          <th scope="col" className="text-center table-dark" >End task day</th>
                         </tr>
                         </thead>

            {list.cards.map((card ,index)=>{
              //  console.log(card, "ttttttttttttttttttttttttttttttttttttttttttt")
              //  console.log(card.title,"uuuuuuuuuuuuuuuuuuuuuuuuuuu")
                    return (
                      <tbody>
                         <tr>
                  
                          <td className="w-25 ">{index+1}) {card.title}</td>
                          <td className="w-25 text-center ">{card.priority}</td>
                          <td className="text-center " >{card.date} </td>
                          <td  className=" text-center">{card.taskdate} </td> 
                         </tr>
                      </tbody>
                    )
                  })}
        </table>
                </div>
          )
          
        })}
        
        </div> 
        </>
    )
}
export {Tableboard}



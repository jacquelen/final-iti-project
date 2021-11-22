import { Paper } from "@mui/material";
import { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import PopUp from "../astrolist/popUp/PopUp";
import { Drawer } from "@mui/material";
import { InputBase, Typography } from "@mui/material";
import storeApi from "../uitilty/storeApi";

function Card({ card, index, id }) {
  const [open, setOpen] = useState(false);
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [newtitle, setNewtitle] = useState(card.title);
  const [taskdate, settaskdate] = useState(card.taskdate);
  const { updatecardtitle, setdatetask } = useContext(storeApi);
  const handleOpenPopUP = () => {
    setbuttonPopup(true);
    setpopupClose(true);
  };
  const handleClosePopUP = () => {
    setbuttonPopup(false);
    setpopupClose(false);
  };
  const handleOnChanges = (e) => {
    setNewtitle(e.target.value);
    if(e.target.id==="1")
    localStorage.setItem("firstCardTitle",e.target.value||newtitle)
    if(e.target.id==="2")
    localStorage.setItem("secondCardTitle",e.target.value||newtitle)
    if(e.target.id==="3")
    localStorage.setItem("thirdCardTitle",e.target.value||newtitle)
    console.log(e.target);
  };

  const handleBlur = () => {
    setOpen(false);
    updatecardtitle(newtitle, id);
  };
  const getdatevalue = (e) => {
    settaskdate(e.target.value);
    setdatetask(taskdate, id);
    console.log(e.target.value, "datevalue");
    console.log(card, "llllllllllllllllllllllll");
  };

  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
                        <>
            {open ? (
              <div
                style={{
                  backgroundColor: "white",
                }}
              >
                <InputBase
                  onChange={handleOnChanges}
                  value={newtitle}
                  autoFocus
                  id={card.id}
                  style={{
                    background: "#eee",
                    width: "100%",
                    padding: "0.5em",
                  }}
                  onBlur={handleBlur}
                />
              </div>
            ) : (
              <div
                className="row justify-content-center align-items-baseline"
                style={{
                  backgroundColor: "white",
                  margin: "0.3em",
                  marginBottom: "0.5em",
                  borderRadius: "0.5em",
                }}
              >
                <div className="col-9">
                  <Typography
                    onClick={() => {
                      setOpen(!open);
                    }}
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      // padding:"0.1em",
                      backgroundColor: "white",
                      margin: "0.5em",
                      //   wordBreak:"break-word",
                      wordBreak: "break-all",
                      lineHeight: "1.2rem",
                    }}
                  >
                    {newtitle}
                  </Typography>
                  <div className="d-flex mt-5">
                    <div className="col-6">task date:</div>
                    <div className="col-3">
                      <input
                        style={{
                          flexGrow: "1",
                          marginBottom: "0.5em",
                          border: "none",
                          borderTop: "1px solid #ccc",
                        }}
                        type="date"
                        id="taskday"
                        name="taskday"
                        onChange={getdatevalue}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "0.85rem",
                      backgroundColor: "#fef68a",
                      marginBottom: "-0.01em",
                      width: "20.8em",
                      paddingLeft: "0.5em",
                      borderRadius: "0.5em",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "0.2em",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-alarm"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                      </svg>
                    </span>
                    {card.date}
                  </p>

                  {/*  */}
                </div>

                <div className="col-3 p-1">
                  <span
                    className="text-primary f-1"
                    style={{
                      fontSize: "1.2em",
                      //   padding:"0.5em",
                      backgroundColor: "white",
                    }}
                    onClick={handleOpenPopUP}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-bookmark-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {/*  */}
</>
            <Drawer
              anchor="top"
              open={popupClose}
              onClose={() => setpopupClose(false)}
            >
              <PopUp trigger={buttonPopup} setTrigger={setbuttonPopup}>
                <div className="d-flex justify-content-between">
                  <h3>{card.title} </h3>
                  <span className="clear-icon" onClick={handleClosePopUP}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
                  </span>
                </div>
              </PopUp>
            </Drawer>
          </div>
        )}
      </Draggable>
    </>
  );
}
export { Card };

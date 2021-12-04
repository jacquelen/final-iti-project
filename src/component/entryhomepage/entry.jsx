import "./entry.css";
import EntryPopup from "./entryPopup/EntryPopup";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { useContext } from "react";
import storeApi from "../uitilty/storeApi";
import SideBar from "./sidebar/SideBar";

function Entrypage() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [inputVal, setInputVal] = useState("");
  // const data =useContext(storeApi);
  // console.log(data,"dataaaaaa from entrypage")
  const handleOpenPopUP = () => {
    setbuttonPopup(true);
    setpopupClose(true);
  };
  const handleClosePopUP = () => {
    setbuttonPopup(false);
    setpopupClose(false);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row justify-content-end align-items-baseline p-3">
              <div className="col me-4 text-left">
                <h1 className="home-head">Home</h1>
              </div>

{/*
              <div className="col-4 ms-3">
                <div className="input-group input-group-sm mb-3 home-input">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="col-2 ps-2 ms-3">
                <span className="p-2 m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </span>
                <span className="p-2 m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </span>
              </div>

              */}
              <div className="row ">
                <div className="col-11  mt-5 border-bottom">
                  <span className="fs-1 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                  <span className="home-task-content">Tasks Due Soon</span>
                </div>
              </div>
              <div className="row">
                <div className="col-11">
                  <p className="text-center text-secondary p-5 ">
                    No tasks due in the next 5 days
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-11 mt-3 border-bottom">
                  <span className="fs-1 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                  <span className="home-task-content">Recent Projects</span>
                </div>
              </div>

              <div className="row ">
                <div className="col-11 mt-2">
                  <div className="project-content w-25 text-center">
                    <div
                      className="w-75 p-5 m-3 project-bar"
                      onClick={handleOpenPopUP}
                    >
                      +
                    </div>
                    new project
                  </div>

                  {/*  */}
                  <div className="project-content w-25  text-center">
                    <div className="w-75 p-5 m-3 project-bar ">+</div>
                    new project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          anchor="top"
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <EntryPopup
            trigger={buttonPopup}
            setTrigger={setbuttonPopup}
            setpopupClose={setpopupClose}
            Submit={setInputVal}
          >
            <div className="d-flex justify-content-between">
              <h3>project name </h3>
              <p>{inputVal}</p>

              <span className="clear-icon" onClick={handleClosePopUP}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </span>
            </div>
          </EntryPopup>
        </Drawer>
      </div>
    </>
  );
}
export { Entrypage };

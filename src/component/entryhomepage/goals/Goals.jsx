import { Drawer, InputBase } from "@mui/material";
import { useState } from "react";
import SideBar from "../sidebar/SideBar";
import "./goals.css";
import GoalsCard from "./goalsCard";
import GoalsPopup from "./goalsPopup";

const Goals = () => {
  const [newtitle, setNewtitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem("goals"))||[]);
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
    localStorage.setItem("input", e.target.value);
  };
  const handleBlur = () => {
    setNewtitle(newtitle);
  };
  const handleOnChangesTextarea = (e) => {
    setTextArea(e.target.value);
    localStorage.setItem("textarea", e.target.value);
  };
  const handleBlurTextarea = (e) => {
    setTextArea(textArea);
  };
  const addGoals = (goal) => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return;
    }
    const newGoals = [goal, ...goals];
    setGoals(newGoals);
    localStorage.setItem("goals",JSON.stringify(newGoals))
  };
  const removeGoal = (id) => {
    const removedArr = [...goals].filter((goal) => goal.id !== id);

    setGoals(removedArr);
    localStorage.setItem("goals",JSON.stringify(removedArr))

  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row justify-content-start ps-0 align-items-baseline p-3">
              <div className="col-5 me-4">
                <h1 className="home-head">Goals</h1>
              </div>
              <div className="col-4 ps-0 ms-3">
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
            </div>
            <div className="row my-5">
              <div className="">
                <div>
                  <InputBase
                    onChange={handleOnChanges}
                    value={localStorage.getItem("input")}
                    autoFocus
                    onBlur={handleBlur}
                    placeholder="Mission"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  />
                </div>

                <InputBase
                  onChange={handleOnChangesTextarea}
                  value={localStorage.getItem("textarea")}
                  autoFocus
                  onBlur={handleBlurTextarea}
                  style={{
                    padding: "0.1em",
                    width: "80%",
                  }}
                  placeholder="Inspire your colleagues with your company mission, vision or philosophy"
                />
              </div>
            </div>

            {goals.length === 0 ? (
              <div className="row mt-5">
                <div className="col-lg-6">
                  <h3 className="my-3 text-color">
                    Set and achieve strategic goals
                  </h3>
                  <p className="w-75 text-secondary ">
                    Add your top level company goals to help teams prioritize
                    and connect work to your organization’s objectives
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleOpenPopUP}
                  >
                    Add company goal
                  </button>
                </div>

                <div className="col-lg-6">
                  <img
                    className="w-100"
                    src="../../assets/people_on_podium_with_flag.svg"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex mt-5 align-items-center">
                  <h3 className="mb-0">Goals</h3>
                  <p className="add-icon mb-0 ms-3" onClick={handleOpenPopUP}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </p>
                </div>

                <GoalsCard goals={goals} removeGoal={removeGoal} />
              </>
            )}
          </div>
        </div>
        <Drawer
          anchor="top"
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <GoalsPopup
            trigger={buttonPopup}
            setTrigger={setbuttonPopup}
            setpopupClose={setpopupClose}
            onSubmit={addGoals}
          >
            <div className="d-flex justify-content-between">
              <h3>Add Goal</h3>
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
          </GoalsPopup>
        </Drawer>
      </div>
    </>
  );
};

export default Goals;

import React, { useState } from "react";
import "./popup.css";
const CheckListCard = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [id, setId] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.floor(Math.random() * 1000), text: inputVal });
    setInputVal("");
    props.setTrigger(false);
  };
  return props.trigger ? (
    <div className="checkListCard shadow p-4">
      <div className="checkListCard-inner">
        {props.children}
        <div className="d-flex justify-content-between">
          <h5>Add checklist</h5>
          <span className="clear-icon" onClick={() => props.setTrigger(false)}>
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

        <form onSubmit={handleSubmit}>
          <label className="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          ></input>
          <button type="submit" class="btn btn-primary mt-5">
            Add
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CheckListCard;
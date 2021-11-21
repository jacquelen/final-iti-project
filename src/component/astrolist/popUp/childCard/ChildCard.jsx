import { useState } from "react";
import TodoList from "../todoList";
const ChildCard = (props) => {
  const [childInput, setchildInput] = useState("");
  const handleCardSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: props.todoID, text: childInput });
    setchildInput("");
    props.setTrigger(false);
  };
  return props.trigger && props.tdId === props.todoID ? (
    <div className="checkListCard shadow p-4">
      <div className="checkListCard-inner">
        {/* {props.children} */}
        <div className="d-flex justify-content-between">
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

        <form onSubmit={handleCardSubmit}>
          <input
            type="text"
            placeholder="add item"
            class="form-control"
            value={childInput}
            onChange={(e) => setchildInput(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-primary mt-5">
            Add
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ChildCard;

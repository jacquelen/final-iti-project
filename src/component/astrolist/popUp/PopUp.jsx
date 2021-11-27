import React, { useEffect, useRef } from "react";
import "./popup.css";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { InputBase, List } from "@mui/material";
import CheckListCard from "./CheckListCard";
import { useState } from "react";
import TodoList from "./todoList";
import Comments from "./Comments";
import { Taskdetail } from "./taskdetail";
import Mention from "./mention";

const PopUp = (props) => {
  const [showCard, setshowCard] = useState(false);
  const [showMentionList, setshowMentionList] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [newtitle, setNewtitle] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [newId, setNewId] = useState();
  const [user, setUser] = useState("");
  const [taskdetails, settaskdetails] = useState(false);
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  const handleCommentsSubmit = (e) => {
    console.log(inputVal);
    e.preventDefault();
    if (inputVal) {
      comments.push({
        id: Math.floor(Math.random() * 1000),
        text: inputVal,
        mention: user,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }
    comments.map((comment) => {
      localStorage.setItem("comments", JSON.stringify(comments));
      console.log(comments);
      setComments(JSON.parse(localStorage.getItem("comments")));
      setNewId(comment.id);

      return comment;
    });

    setInputVal("");
    setUser("");
  };
  const commentRef = useRef("");
  useEffect(() => {}, [comments]);

  const removeComment = (id) => {
    const removedArr = [...comments].filter((comment) => comment.id !== id);

    setComments(removedArr);
    localStorage.setItem("comments", JSON.stringify(removedArr));
  };
  const handleOnChanges = (e) => {
    setNewtitle(e.target.value);
    localStorage.setItem("inputDes", e.target.value);
  };
  const handleBlur = () => {
    setNewtitle(newtitle);
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
    localStorage.setItem("todo", JSON.stringify(removedArr));
  };
  return props.trigger ? (
    <div className="pop-up shadow p-4">
      <div className="popup-inner">
        {props.children}
        <div className="row justify-content-start">
          <div className="col-4">
            <Box sx={{ width: 250 }} anchor="right" role="presentation right">
              <List>
                {
                  <>
                    <ListItem
                      className="check-list-item"
                      button
                      onClick={() => setshowCard(true)}
                    >
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-card-checklist"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Checklist" />
                    </ListItem>
                    <ListItem button onClick={() => settaskdetails(true)}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="task detail" />
                    </ListItem>
                  </>
                }
              </List>
            </Box>
            <div>
              <CheckListCard
                trigger={showCard}
                setTrigger={setshowCard}
                onSubmit={addTodo}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-5">
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </span>
              <span>Description</span>
            </div>
            <div className="w-100 border p-2 shadow-sm">
              <InputBase
                multiline
                onChange={handleOnChanges}
                value={localStorage.getItem("inputDes")}
                autoFocus
                onBlur={handleBlur}
                placeholder="Add a more detailed description..."
                style={{
                  fontSize: "1rem",
                  fontWeight: "normal",
                  width: "100%",
                  height: "5em",
                  alignItems: "flex-start",
                }}
              />
            </div>
            <div className="mt-4">
              <TodoList todos={todos} removeTodo={removeTodo} />
            </div>

            <div className="my-5">
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </span>
              <span>Activity</span>
            </div>

            <div>
              <form onSubmit={handleCommentsSubmit}>
                <input
                  type="text"
                  ref={commentRef}
                  placeholder="Write a comment..."
                  class="form-control"
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    if (e.target.value === "@") {
                      setshowMentionList(true);
                    } else {
                      setshowMentionList(false);
                    }
                  }}
                />

                <Mention
                  trigger={showMentionList}
                  setTrigger={setshowMentionList}
                  setInputVal={setInputVal}
                  setUser={setUser}
                  user={user}
                />
                <button type="submit" class="btn btn-primary mt-3">
                  Add
                </button>
              </form>
            </div>
            <Comments
              comments={comments}
              removeComment={removeComment}
              newId={newId}
            />
          </div>
        </div>
        <div>
          <Taskdetail
            triggers={taskdetails}
            setTriggers={settaskdetails}
            taskdate={props.taskdate}
            recentdate={props.recentdate}
            card={props.card}
            typecard={props.typecard}
            data={props.data}
            listId={props.listId}
            list={props.list}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;

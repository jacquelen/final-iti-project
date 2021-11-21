import { useState } from "react";
import ChildCard from "./childCard/ChildCard";
import TodoListChild from "./childCard/todoListChild";

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  const [showChild, setshowChild] = useState(false);
  const [todosChild, settodosChild] = useState([]);
  const [todoss, setTodoss] = useState(todos);
  const [tdId, setTdId] = useState();

  const addTodoChild = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todosChild];
    settodosChild(newTodos);
    let updatedTodos = todos.map((todo) => {
      todo.children = todosChild;
      return todo;
    });
    setTodoss(updatedTodos);
  };

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="list-child d-flex border">
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}

          <TodoListChild todos={todosChild} todoID={todo.id} />
        </div>
        <button
          className="btn btn-primary"
          id={todo.id}
          type="button"
          onClick={(e) => {
            setTdId(+e.target.id);
            if (+e.target.id === todo.id) {
              setshowChild(true);
            }
          }}
        >
          add item
        </button>

        <div>
          <span className="clear-icon" onClick={() => removeTodo(todo.id)}>
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
      </div>
      <ChildCard
        todoChild={todosChild}
        todoID={todo.id}
        tdId={tdId}
        trigger={showChild}
        setTrigger={setshowChild}
        onSubmit={addTodoChild}
      />
    </div>
  ));
};

export default TodoList;

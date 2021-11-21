const TodoListChild = ({ todos, todoID }) => {
  console.log("this is the todo");
  return todos.map(
    (todo) =>
      todoID === todo.id && (
        // className={todo.isComplete ? "todo-row complete" : "todo-row"}
        <div>
          <div className="d-flex">
            <div>{todo.text}</div>
          </div>
        </div>
      )
  );
};

export default TodoListChild;

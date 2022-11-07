import React from "react";

function TodoList(props) {

return <li onClick={()=>props.del(props.id)}>{props.todoItem}</li>;
}

export default TodoList;

import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const stylesTodoList = {
  ul: {
    listStyle: "none",
    margin: "0 0 30px",
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul className="todoList" style={stylesTodoList.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

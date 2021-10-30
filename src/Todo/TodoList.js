import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <TransitionGroup>
        {props.todos.map((todo, index) => {
          return (
            <CSSTransition key={todo.id} timeout={500} classNames="item">
              <TodoItem todo={todo} index={index} onChange={props.onToggle} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid rgba(0,0,0,.03)",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,.08)",
    borderRadius: "4px",
    marginBottom: ".5rem",
    transition: "all 0.3s ease-in",
  },
  input: {
    marginRight: "1rem",
    cursor: "pointer",
  },
  strong: {
    marginRight: "0.5rem",
    color: "#0082e6",
  },
};

function TodoItem({ todo, index, onChange }) {
  console.log("todo", todo);
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.strong}>{index + 1}</strong>
        {todo.title}
      </span>

      <button
        className="btn"
        // onClick={() => {
        //   removeTodo(todo.id);
        // }}
        onClick={removeTodo.bind(null, todo.id)}
      >
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

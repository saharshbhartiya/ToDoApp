import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter todo items"
          ></input>
          <button className={styles.button} onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

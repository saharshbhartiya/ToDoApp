import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
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

import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleDescChange = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const handleDateChange = (event) => {
    setTodo({ ...todo, date: event.target.value });
  };

  const addTodo = () => {
    if (todo.desc == "") {
      alert("A todo cannot be empty.");
    } else if (todo.date == "") {
      alert("A todo must have a date.");
    } else {
      setTodos([...todos, todo]);
      setTodo({ ...todo, desc: "", date: "" });
    }
  };

  return (
    <div>
      <h1>Simple todolist</h1>
      <h2>Add a todo</h2>
      <form>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={todo.desc}
          onChange={handleDescChange}
          name="description"
        ></input>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={todo.date}
          onChange={handleDateChange}
          name="date"
        ></input>
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;

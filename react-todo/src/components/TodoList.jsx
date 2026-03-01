import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Write tests", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const todo = { id: Date.now(), text: newTodo.trim(), completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>📝 Todo List</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
          data-testid="new-todo-input"
          style={{ padding: "8px", width: "70%", marginRight: "10px" }}
        />
        <button
          onClick={addTodo}
          data-testid="add-todo-button"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add Todo
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: todo.completed ? "#d4edda" : "#fff",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-item-${todo.id}`}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#888" : "#000",
              }}
            >
              {todo.completed ? "✅" : "⬜"} {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-todo-${todo.id}`}
              style={{
                padding: "4px 10px",
                cursor: "pointer",
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p style={{ color: "#888" }}>No todos yet!</p>}
    </div>
  );
};

export default TodoList;
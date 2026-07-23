
import { useState } from "react";

function App() {
            const [task, setTask] = useState("");
            const [todos, setTodos] = useState([
              { id: 1, text: "Learn React" , completed: false},
              { id: 2, text: "Build Todo App" , completed: false},
              { id: 3, text: "Drink Water" , completed: false},
              { id: 4, text: "Exercise" , completed: false},
              { id: 5, text: "Read a Book" , completed: false}
]);

            const handleAddTask = () => {
                if (task.trim() !== "") {
                    // Logic to add the task to the list
                    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: task, completed: false }]);
                    setTask(""); // Clear the input field after adding
                }
            };

            const handleDeleteTask = (id) => {
                // Logic to delete the task from the list
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
            };
            const handleToggleComplete = (id) => {
                setTodos(prevTodos =>
                  prevTodos.map(todo =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                  )
                );
            };

  return (
    <main >
      
        <h1>Welcome to my todo list</h1>  
        
        <input type="text" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>

        <ul>
  {todos.map((todo) => (
    <li key={todo.id}>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
      <button onClick={() => handleToggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </li>
  ))}
</ul>

         
      </main  >
  );
}

export default App;

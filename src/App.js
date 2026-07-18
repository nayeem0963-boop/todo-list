
import { useState } from "react";

function App() {
            const [task, setTask] = useState("");
            const [todos, setTodos] = useState([
  "Learn React",
  "Build Todo App",
  "Drink Water",
  "Exercise",
  "Read a Book"
]);

            const handleAddTask = () => {
                if (task.trim() !== "") {
                    // Logic to add the task to the list
                    setTodos(prevTodos => [...prevTodos, task]);
                          setTask(""); // Clear the input field after adding
                }
            };

  return (
    <main >
      
        <h1>Welcome to my todo list</h1>  
        
        <input type="text" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>

        <ul>
  {todos.map((todo, index) => (
    <li key={index}>{todo}</li>
  ))}
</ul>

         
      </main  >
  );
}

export default App;

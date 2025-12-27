import { useState } from 'react'
import './App.css'


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task One', content: 'This is the first task', timeframe: "day", targetDate: "2025-12-26", completed: false },
    { id: 2, title: 'Task Two', content: 'This is the second task', timeframe: "week", targetDate: "2025-12-21", completed: false },
    { id: 3, title: 'Task Three', content: 'This is the third task', timeframe: "month", targetDate: "2025-12-01", completed: false }
  ]);

  return (
    <div className="app-container">
      <h1>Sasha's Todo List</h1>
      
      <div style={{ background: '#333', color: '#fff', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
        <h3>Current State Check:</h3>
        <pre>{JSON.stringify(tasks, null, 2)}</pre>
      </div>

    </div>
  )
}

export default App

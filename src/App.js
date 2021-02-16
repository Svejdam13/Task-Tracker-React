
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
   const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'ukol prvni',
    day: '20 Unor v 16:00',
    reminder: true,
  },
  {
    id: 2,
    text: 'ukol druhy',
    day: '22 Unor v 11:20',
    reminder: true,
  },
  {
    id: 3,
    text: 'ukol treti',
    day: '25 Unor v 16:50',
    reminder: false,
  },
])

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}



export default App;

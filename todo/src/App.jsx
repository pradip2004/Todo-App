import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem';
import axios from 'axios';


const App = () =>{
  const userEmail = "pradip@gmail.com"
  const [tasks, setTasks] = useState(null)


  const getData = async () => {
    try{
      const response = await axios.get(`http://localhost:8000/todos/${userEmail}`);
      setTasks(response.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=> getData, [])


  return (
    <div className='app'>
      <ListHeader listName={'🏝️Holiday Tick List'} />
      {tasks?.map((task)=> <ListItem key={task.id} task={task}/>)}
      
    </div>
  )
}

export default App

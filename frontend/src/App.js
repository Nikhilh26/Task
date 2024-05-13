import { useState, createContext, useContext } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { Link } from 'react-router-dom';

const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);

function App() {

  const editTask = () => {
  };

  const shiftTask = () => {
  };

  const deleteTask = () => {
  };

  const [toDo, setToDo] = useState([]); // {id:mongodb,message:''} this id will be used as key and for shifting,deleting and editing
  const [completed, setCompleted] = useState([]);
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');

  const handleOnClickAdd = (e) => {
    e.preventDefault();
    setToDo((prev) => [...prev, text]);
    setText('');
    console.log(toDo);
  }

  return (
    <TaskContext.Provider value={{ editTask, shiftTask, deleteTask }}>

      <div className='Login'>
        {
          userName.length === 0 ?
            <Link
              to="/login"
              style={{ 'textDecoration': 'none', 'color': 'black' }}
            >
              <h3>
                LogIn/SignUp
              </h3>
            </Link> :
            <h3>{userName}</h3>
        }
      </div>

      <div className="App">

        <div
          className='Input'
        >

          <input
            type='text'
            placeholder='Enter Task to be done'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>

          <button
            className='Add-btn'
            onClick={handleOnClickAdd}
          >
            Add Task
          </button>

        </div>

        <div className='Tasklist'>
          <TaskList header={'To Be Done'} borderColor={'rgb(170, 22, 22)'} list={toDo} />
          <TaskList header={'Completed'} borderColor={'green'} list={completed} />
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
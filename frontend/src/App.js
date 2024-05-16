// import { useState, createContext, useContext, useEffect } from 'react';
// import './App.css';
// import TaskList from './components/TaskList';
// import { Link } from 'react-router-dom';

// const TaskContext = createContext();
// export const useTaskContext = () => useContext(TaskContext);

// function App() {

//   const [toDo, setToDo] = useState([]);
//   const [completed, setCompleted] = useState([]);
//   const [text, setText] = useState('');
//   const [userName, setUserName] = useState('');

//   const editTask = async (taskId, text) => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) return;
//       const response = await fetch('https://task-tnit.onrender.com/api/todo/description', {
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `bearer ${token}`
//         },
//         method: 'PUT',
//         body: JSON.stringify({
//           taskId,
//           description: text
//         })
//       })

//       const data = await response.json();

//       if (data.success) {
//         setToDo((prev) => prev.map((e) => {
//           if (e.taskId === taskId) {
//             return { ...e, description: text }
//           } else {
//             return e;
//           }
//         }));

//         setCompleted((prev) => prev.map((e) => {
//           if (e.taskId === taskId) {
//             return { ...e, description: text }
//           } else {
//             return e;
//           }
//         }));
//       }

//       console.log(toDo);
//     } catch (error) {
//       console.log(error);
//       alert('Something went wrong try again later');
//     }
//   };

//   const shiftTask = async (taskId) => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) return;
//       const response = await fetch('https://task-tnit.onrender.com/api/todo/complete', {
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `bearer ${token}`
//         },
//         method: 'PUT',
//         body: JSON.stringify({
//           taskId
//         })
//       })

//       const data = await response.json();
//       if (data.success) {
//         setToDo((prev) => prev.filter((e) => e.taskId !== taskId));
//         setCompleted((prev) => [...prev, { description: data.description, taskId }]);
//       }

//       console.log(toDo);
//     } catch (error) {
//       console.log(error);
//       alert('Something went wrong try again later');
//     }
//   };

//   const deleteTask = async (taskId) => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) return;
//       const response = await fetch('https://task-tnit.onrender.com/api/todo', {
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `bearer ${token}`
//         },
//         method: 'DELETE',
//         body: JSON.stringify({
//           taskId
//         })
//       })

//       const data = await response.json();
//       if (data.success) {
//         setToDo((prev) => prev.filter((e) => e.taskId !== taskId));
//         setCompleted((prev) => prev.filter((e) => e.taskId !== taskId));
//       }

//       console.log(toDo);
//     } catch (error) {
//       console.log(error);
//       alert('Something went wrong try again later');
//     }
//   };

//   const handleOnClickAdd = async (e) => {
//     try {
//       e.preventDefault();
//       const token = localStorage.getItem('token')
//       if (!token) return;
//       const response = await fetch('https://task-tnit.onrender.com/api/todo', {
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `berarer ${token}`
//         },
//         method: 'POST',
//         body: JSON.stringify({
//           description: text
//         })
//       })

//       const data = await response.json();
//       if (data.success) {
//         setToDo((prev) => [...prev, { description: text, taskId: data.taskId }]);
//       }
//       setText('');
//       console.log(toDo);
//     } catch (error) {
//       console.log(error);
//       alert('Something went wrong try again later');
//     }
//   }

//   useEffect(() => {
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {

//         const handle = async () => {
//           const response = await fetch('https://task-tnit.onrender.com/api/todo', {
//             headers: {
//               'Content-Type': 'application/json',
//               authorization: `berarer ${token}`
//             }
//           })

//           const data = await response.json();

//           if (data.success) {
//             setUserName(data.name);
//             setCompleted(data.completedTasks)
//             setToDo(data.toDoTasks)
//           }
//         }

//         handle();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   return (
//     <TaskContext.Provider value={{ editTask, shiftTask, deleteTask }}>

//       <div className='Login'>
//         {
//           userName.length === 0 ?
//             <h3>
//               <Link
//                 to="/login"
//                 style={{ 'textDecoration': 'none', 'color': 'black' }}
//               >
//                 LogIn
//               </Link>
//               /
//               <Link
//                 to="/signup"
//                 style={{ 'textDecoration': 'none', 'color': 'black' }}
//               >
//                 SignUp
//               </Link>
//             </h3>
//             :
//             <button title='Logout'
//               onClick={(e) => {
//                 e.preventDefault();
//                 localStorage.removeItem('token');
//                 setCompleted([]);
//                 setUserName('');
//                 setToDo([]);
//               }}
//               style={{ 'border': '0px', backgroundColor: 'rgb(51, 51, 230)', fontWeight: 'bold', fontSize: '16px' }}
//             >{userName}</button>
//         }
//       </div>

//       <div className="App">

//         <div
//           className='Input'
//         >

//           <input
//             type='text'
//             placeholder='Enter Task to be done'
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           ></input>

//           <button
//             className='Add-btn'
//             onClick={handleOnClickAdd}
//           >
//             Add Task
//           </button>

//         </div>

//         <div className='Tasklist'>
//           <TaskList header={'To Be Done'} borderColor={'rgb(170, 22, 22)'} list={toDo} />
//           <TaskList header={'Completed'} borderColor={'green'} list={completed} />
//         </div>
//       </div>

//     </TaskContext.Provider>
//   );
// }

// export default App;

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}

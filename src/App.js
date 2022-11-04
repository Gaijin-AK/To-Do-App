import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
// import DoneTasks from "./components/DoneTasks";
// import PendingTasks from "./components/PendingTasks";
import TaskPage from "./components/TaskPage";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [title, setTitle] = useState("Task Manager");
  const [newTodo, addNewTodo] = useState("");

  // const initialTasks = [
  //   {
  //     id: 1,
  //     name: "Fix Bed",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Walk dog",
  //     done: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Clean bathroom",
  //     done: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Clean PC",
  //     done: false,
  //   },
  // ];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/tasks").then((response) => {
      console.log(response);
      setTasks(response.data);
    });
  }, []);

  // //filters all task done:true
  // const doneTasks = tasks.filter((task) => task.done);
  // //filters all task done:false
  // const notDone = tasks.filter((task) => !task.done);

  const completeTaskHandler = (id) => {
    let newState = [...tasks];
    console.log("hey this is the start state", tasks);
    //look for the index of the given ID
    const index = newState.findIndex((task) => task.id === id);
    console.log("hey this is the index", index);

    //change the done from false to true
    newState[index].done = true;
    console.log("hey this is the end state", newState);

    //set the State to the new value
    setTasks(newState);
  };

  // const changeMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  const addTodo = () => {
    const newTasks = {
      id: uuidv4(),
      name: newTodo,
      done: false,
    };
    setTasks([...tasks, newTasks]);
  };

  return (
    <div className="App">
      <div>
        <h1>{title}</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => addNewTodo(e.target.value)}
        />
        <button onClick={addTodo}> Click me! </button>
        <br />

        <nav>
          <Link to="">All Tasks</Link> |<Link to="donE"> Done Tasks</Link> |
          <Link to="pendINg"> Pending Tasks</Link>
        </nav>
      </div>

      {/* Routes - Done Task, Pending Task, All Task */}
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        {/* <Route path="/done" element={<DoneTasks tasks={doneTasks} />} />
        <Route
          path="/pending"
          element={
            <PendingTasks tasks={notDone} completeTask={completeTaskHandler} />
          }
        /> */}

        <Route
          path=":status"
          element={
            <TaskPage tasks={tasks} completeTask={completeTaskHandler} />
          }
        />
      </Routes>

      {/* <TaskList tasks={notDone} completeTask={completeTaskHandler} />
      <TaskList tasks={doneTasks} /> */}
      {/* <p>{message}</p> */}
    </div>
  );
};

export default App;

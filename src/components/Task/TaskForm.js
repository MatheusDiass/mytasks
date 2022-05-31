import api from "../../api";
import { useNavigate } from "react-router-dom";

//Hooks
import { useState } from "react";

//Components
import Button from "../Buttons/Button";


function TaskForm() {

  const [task, setTasks] = useState({ title: "", date: "", description: "", taskList: "",  share: "", friendList: "" });
  const navigate = useNavigate();
  
  //adicionar tarefa
  async function addTask() {
    try {
      const { data } = await api.post("/task", task);
      navigate("/addtask");
    } catch (error) {
      console.log(error);
    }
  }

  function handletitle({ target: { value } }) {
    setTasks({ ...task, title: value });
  }

  function handledate({ target: { value } }) {
    setTasks({ ...task, date: value });
  }

  function handledescription({ target: { value } }) {
    setTasks({ ...task, description: value });
  }

  function handletaskList({ target: { value } }) {
    setTasks({ ...task, taskList: value });
  }

  function handleshare({ target: { value } }) {
    setTasks({ ...task, share: value });
  }
  
  function handlefriendList({ target: { value } }) {
    setTasks({ ...task, friendList: value });
  }


  return (
    <form className="form">
      <label for="title">Título:</label>
      <input type={"text"} className="input" id="title" value={task.title} onChange={handletitle} />

      <label for="date">Data:</label>
      <input type="date" className="input" id="date" value={task.date} onChange={handledate} />

      <label for="description">Descrição:</label>
      <textarea className="input" id="description" value={task.description} onChange={handledescription} />

      <label for="taskList">Pertence a lista:</label>
      <input type="text" className="input" id="taskList" value={task.taskList} onChange={handletaskList} />

      <label for="share">Compartilhar?</label>
      <br />
      <input type="checkbox" className="input--checkbox" id="share" value={task.share} onChange={handleshare} />

      <br />

      <label for="friendList">Amigos:</label>
      <input type="search" className="input" id="friendList" value={task.friendList} onChange={handlefriendList} />

      <Button text={"Salvar"} click={addTask} />
    </form>
  );
}


export default TaskForm;

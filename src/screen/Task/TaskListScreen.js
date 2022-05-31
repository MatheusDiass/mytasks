import api from '../../api';

//Hooks
import { useState, useEffect } from 'react';

//Helpers
import { getCookie } from '../../helpers/cookieManager';

//Components
import Search from '../../components/Search/Search';
import CommomCard from '../../components/Cards/CommomCard';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [tasksFilter, setTasksFilter] = useState([]);

  //User - Cookie
  const user = JSON.parse(getCookie('user'));

  useEffect(() => {
    (async () => {
      try {
        //Busca todas as tarefas
        const { data } = await api.get(`/tasks/${user.id}`);
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id]);

  //Filtra a lista de tarefas
  function filter(name) {
    if (name !== '') {
      const task = tasks.filter((task) => task.title.toLowerCase().includes(name.toLowerCase()));
      setTasksFilter(task);
    } else {
      setTasksFilter(tasks);
    }
  }

  //Deleta uma tarefa
  async function deleteTask(taskId) {
    try {
      await api.delete(`/tasks/${taskId}`);

      //Busca todas as tarefas
      const { data } = await api.get(`/tasks/${user.id}`);
      setTasks(data);
      setTasksFilter([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="taskScreen">
      <h1>Grupos de Tarefas</h1>

      <Search search={filter} />

      <div className="tasks">
        <ul className="tasks__list">
          {tasksFilter.length > 0
            ? tasksFilter.map((task) => (
                <li className="tasks__list__item" key={task._id}>
                  <CommomCard
                    title={task.title}
                    click={() => {
                      deleteTask(task._id);
                    }}
                  />
                </li>
              ))
            : tasks.map((task) => (
                <li className="tasks__list__item" key={task._id}>
                  <CommomCard
                    title={task.title}
                    click={() => {
                      deleteTask(task._id);
                    }}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;

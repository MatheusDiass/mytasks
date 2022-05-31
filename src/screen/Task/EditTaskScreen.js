import api from '../../api';

import { useParams } from 'react-router-dom';

//Hooks
import { useEffect, useState } from 'react';

//Components
import TaskForm from '../../components/Task/TaskForm';

function EditTaskScreen() {
  const [task, setTask] = useState([]);
  let params = useParams();
  const taskId = params.id;

  useEffect(() => {
    (async () => {
      try {
        //Busca a tarefa pelo id
        const { data } = await api.get(`/tasks/${taskId}`);
        setTask(data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [taskId]);

  return (
    <div className="editTaskScreen">
      <h1>Editar Tarefa</h1>

      <TaskForm aa={task} />
    </div>
  );
}

export default EditTaskScreen;

import api from '../../api';
import { useNavigate } from 'react-router-dom';

//Hooks
import { useEffect, useState } from 'react';

//Helpers
import { getCookie } from '../../helpers/cookieManager';

//Components
import Button from '../Buttons/Button';

function GroupForm({ objGroup }) {
  const [group, setGroup] = useState({
    title: '',
    task: '',
  });
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  //User - Cookie
  const user = JSON.parse(getCookie('user'));

  useEffect(() => {
    if (objGroup) {
      setGroup(objGroup);
    }

    (async () => {
      try {
        //Busca todas as tarefas
        const { data } = await api.get(`/tasks/user/${user.id}`);
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id, objGroup]);

  //Adiciona uma tarefa ou edita uma tarefa
  async function addOrEditGroup() {
    try {
      if (objGroup) {
        await api.put(`/groups/${objGroup._id}`, group);
        navigate('/groups');
      } else {
        group.userId = user.id;
        await api.post('/groups', group);
        navigate('/groups');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleTitle({ target: { value } }) {
    setGroup({ ...group, title: value });
  }

  function handleTask({ target: { value } }) {
    setGroup({ ...group, task: value });
  }

  return (
    <form className="form">
      <label for="name">Nome:</label>
      <input className="input" id="name" value={group.title} onChange={handleTitle} type={'text'} />

      <label for="task">Tarefas:</label>
      <select className="input" value={group.task} onChange={handleTask}>
        <option value={0}>Selecione uma tarefa</option>
        {tasks.map((task) => (
          <option value={task._id} key={task._id}>
            {task.title}
          </option>
        ))}
      </select>

      <Button text={'Salvar'} click={addOrEditGroup} />
    </form>
  );
}

export default GroupForm;

import api from '../../api';
import { useNavigate } from 'react-router-dom';

//Hooks
import { useEffect, useState } from 'react';

//Helpers
import { getCookie } from '../../helpers/cookieManager';

//Components
import Button from '../Buttons/Button';

function TaskForm({ objTask }) {
  const [task, setTask] = useState({
    title: '',
    date: '',
    description: '',
    group: '',
    share: '',
    friends: '',
    userId: '',
  });
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  //User - Cookie
  const user = JSON.parse(getCookie('user'));

  useEffect(() => {
    if (objTask) {
      setTask(objTask);
    }

    (async () => {
      try {
        //Busca todos os grupos de tarefas
        const { data } = await api.get(`/groups/${user.id}`);
        setGroups(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id, objTask]);

  //Adiciona uma tarefa
  async function addOrEditTask() {
    try {
      if (objTask) {
        await api.put(`/tasks/${objTask._id}`, task);
        navigate('/tasks');
      } else {
        task.userId = user.id;
        await api.post('/tasks', task);
        navigate('/tasks');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleTitle({ target: { value } }) {
    setTask({ ...task, title: value });
  }

  function handleDate({ target: { value } }) {
    setTask({ ...task, date: value });
  }

  function handleDescription({ target: { value } }) {
    setTask({ ...task, description: value });
  }

  function handleGroup({ target: { value } }) {
    setTask({ ...task, group: value });
  }

  function handleShare({ target: { value } }) {
    setTask({ ...task, share: value });
  }

  function handleFriends({ target: { value } }) {
    setTask({ ...task, friends: value });
  }

  return (
    <form className="form">
      <label for="title">Título:</label>
      <input type={'text'} className="input" id="title" value={task.title} onChange={handleTitle} />

      <label for="date">Data:</label>
      <input type="date" className="input" id="date" value={task.date} onChange={handleDate} />

      <label for="description">Descrição:</label>
      <textarea
        className="input"
        id="description"
        value={task.description}
        onChange={handleDescription}
      />

      <label for="group">Pertence ao grupo:</label>
      <select className="input" value={task.group} onChange={handleGroup}>
        <option value={0}>Selecione uma tarefa</option>
        {groups.map((group) => (
          <option value={group._id}>{group.name}</option>
        ))}
      </select>

      <label for="share">Compartilhar?</label>
      <br />
      <input
        type="checkbox"
        className="input--checkbox"
        id="share"
        value={task.share}
        onChange={handleShare}
      />

      <br />

      <label for="friends">Amigos:</label>
      <input
        type="search"
        className="input"
        id="friends"
        value={task.friends}
        onChange={handleFriends}
      />

      <Button text={'Salvar'} click={addOrEditTask} />
    </form>
  );
}

export default TaskForm;

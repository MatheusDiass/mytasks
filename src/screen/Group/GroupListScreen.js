import api from '../../api';

//Hooks
import { useState, useEffect } from 'react';

//Helpers
import { getCookie } from '../../helpers/cookieManager';

//Components
import Search from '../../components/Search/Search';
import CommomCard from '../../components/Cards/CommomCard';

function GroupListScreen() {
  const [groups, setGroups] = useState([]);
  const [groupsFilter, setGroupsFilter] = useState([]);

  //User - Cookie
  const user = JSON.parse(getCookie('user'));

  useEffect(() => {
    (async () => {
      try {
        //Busca todos os grupos de tarefas
        const { data } = await api.get(`/groups/${user.id}`);
        setGroups(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id]);

  //Filtra a lista de grupos de tarefas
  function filter(name) {
    if (name !== '') {
      const group = groups.filter((group) => group.name.toLowerCase().includes(name.toLowerCase()));
      setGroupsFilter(group);
    } else {
      setGroupsFilter(groups);
    }
  }

  //Deleta um grupo de tarefas
  async function deleteGroup(groupId) {
    try {
      await api.delete(`/groups/${groupId}`);

      //Busca todos os grupos de tarefas
      const { data } = await api.get(`/groups/${user.id}`);
      setGroups(data);
      setGroupsFilter([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='groupScreen'>
      <h1>Grupos de Tarefas</h1>

      <Search search={filter} />

      <div className='groups'>
        <ul className='groups__list'>
          {groupsFilter.length > 0
            ? groupsFilter.map((group) => (
                <li className="groups__list__item" key={group._id}>
                  <CommomCard
                    title={group.name}
                    click={() => {
                      deleteGroup(group._id);
                    }}
                  />
                </li>
              ))
            : groups.map((group) => (
                <li className="groups__list__item" key={group._id}>
                  <CommomCard
                    title={group.name}
                    click={() => {
                      deleteGroup(group._id);
                    }}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default GroupListScreen;

import api from '../../api';

import { useParams } from 'react-router-dom';

//Hooks
import { useEffect, useState } from 'react';

//Components
import GroupForm from '../../components/Group/GroupForm';

function EditGroupScreen() {
  const [group, setGroup] = useState([]);
  let params = useParams();
  const groupId = params.id;

  useEffect(() => {
    (async () => {
      try {
        //Busca um grupo pelo id
        const { data } = await api.get(`/groups/${groupId}`);
        setGroup(data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [groupId]);

  return (
    <div className="editGroupScreen">
      <h1>Editar Grupo</h1>

      <GroupForm objGroup={group} />
    </div>
  );
}

export default EditGroupScreen;

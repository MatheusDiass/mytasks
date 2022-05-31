import { Link } from 'react-router-dom';

//Icons
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPencilOutline } from '@mdi/js'; 

function CommomCard({ route, title, click }) {
  return (
    <div className="card">
      <p>{title}</p>
      <div>
        <button>
          <Link to={route}>
            <Icon path={mdiPencilOutline} size={1.3} />
          </Link>
        </button>
        <button onClick={click}>
          <Icon path={mdiDeleteOutline} size={1.3} color="#FF0000" />
        </button>
      </div>
    </div>
  );
}

export default CommomCard;

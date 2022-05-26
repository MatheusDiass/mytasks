//Icons
import Icon from "@mdi/react";
//import { mdiDeleteOutline } from "@mdi/js";
import { mdiTrashCan } from '@mdi/js';


function CommomCard() {
  return (
    
    <div className="card">
      <p>Test 1</p>
      <button>
        <Icon className="icon" path={mdiTrashCan} size={1.3}  />
      </button>
    </div>
  );
}

export default CommomCard;

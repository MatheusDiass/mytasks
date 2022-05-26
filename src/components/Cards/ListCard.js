//Icons
import Icon from "@mdi/react";
//import { mdiHeartOutline  } from "@mdi/js";
import { mdiHeart } from '@mdi/js';

export function ListCard() {

  return (
    <div className="card">
      <p>Test 1</p>
      <button>
        <Icon className="icon" path={mdiHeart } size={1.3}  />
      </button>
    </div>
  );
}



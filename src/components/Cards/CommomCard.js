//Icons
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

function CommomCard({ title, click }) {
  return (
    <div className="card">
      <p>{title}</p>
      <button onClick={click}>
        <Icon path={mdiDeleteOutline} size={1.3} color="#FF0000" />
      </button>
    </div>
  );
}

export default CommomCard;

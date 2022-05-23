import "../menu.sass";
import Icon from "@mdi/react";
import { mdiHome } from '@mdi/js';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { mdiPlaylistCheck } from '@mdi/js';
import { mdiShareVariantOutline } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';

function List() {
    
  return (
      
    <ul id="menu"><a  id="logo" href="">Menu</a>
      <li>
        <a href="">
          <Icon path={mdiHome} size={0.8}></Icon>Home
        </a>
      </li>
      <li>
        <a href="">
          <Icon path={mdiCheckboxMarkedCircleOutline} size={0.8}></Icon>Minhas
          Tarefas
        </a>
      </li>
      <li>
        <a href="">
          <Icon path={mdiPlaylistCheck} size={0.8}></Icon>Lista de Tarefas
        </a>
      </li>
      <li>
        <a href="">
          <Icon path={mdiShareVariantOutline} size={0.8}></Icon>Tarefas
          Compartilhadas
        </a>
      </li>
      <li>
        <a href="">
          <Icon path={mdiAccountMultiple} size={0.8}></Icon>Amigos
        </a>
      </li>
    </ul>
  );
}

export default List;

import { Link } from 'react-router-dom';

//Icons
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { mdiPlaylistCheck } from '@mdi/js';
import { mdiShareVariantOutline } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';

function MenuList() {
  return (
    <div>
      <ul className="nav__list">
        <ul className="nav__list__item">
          <a href="/" className="nav__list__item__link">
            <Icon path={mdiHome} size={1.3} />
            <span className="nav__list__item__link__text">Home</span>
          </a>
        </ul>
        <ul className="nav__list__item">
          <a href="/" className="nav__list__item__link">
            <Icon path={mdiCheckboxMarkedCircleOutline} size={1.3} />
            <span className="nav__list__item__link__text">Minhas Tarefas</span>
          </a>
        </ul>
        <ul className="nav__list__item">
          <a href="/" className="nav__list__item__link">
            <Icon path={mdiPlaylistCheck} size={1.3} />
            <span className="nav__list__item__link__text">Lista de Tarefas</span>
          </a>
        </ul>
        <ul className="nav__list__item">
          <a href="/" className="nav__list__item__link">
            <Icon path={mdiShareVariantOutline} size={1.3} />
            <span className="nav__list__item__link__text">Tarefas Compartilhadas</span>
          </a>
        </ul>
        <ul className="nav__list__item">
          <div className="nav__list__item__link">
            <Icon path={mdiAccountMultiple} size={1.3} />
            <Link className="nav__list__item__link__text" to="/friends">
              Amigos
            </Link>
          </div>
        </ul>
      </ul>
    </div>
  );
}

export default MenuList;

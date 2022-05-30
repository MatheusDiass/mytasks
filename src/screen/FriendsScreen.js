import api from '../api';

//Hooks
import { useState, useEffect } from 'react';

//Helpers
import { getCookie } from '../helpers/cookieManager';

//Components
import Search from '../components/Search/Search';
import CommomCard from '../components/Cards/CommomCard';

function LoginScreen() {
  const [friends, setFriends] = useState([]);
  const [friendsFilter, setFriendsFilter] = useState([]);

  //User - Cookie
  const user = JSON.parse(getCookie('user'));

  useEffect(() => {
    (async () => {
      try {
        //Busca todos os amigos
        const { data } = await api.get(`/friends/${user.id}`);
        setFriends(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id]);

  //Filtra a lista de amigos
  function filter(name) {
    if (name !== '') {
      const friend = friends.filter((friend) =>
        friend.name.toLowerCase().includes(name.toLowerCase())
      );
      setFriendsFilter(friend);
    } else {
      setFriendsFilter(friends);
    }
  }

  //Deleta um amigo
  async function deleteFriend(friendId) {
    try {
      await api.delete(`/friends/${user.id}/${friendId}`);

      //Busca todos os amigos
      const { data } = await api.get(`/friends/${user.id}`);
      setFriends(data);
      setFriendsFilter([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="friendScreen">
      <h1>Amigos</h1>

      <Search search={filter} />

      <div className="friends">
        <ul className="friends__list">
          {friendsFilter.length > 0
            ? friendsFilter.map((friend) => (
                <li className="friends__list__item" key={friend._id}>
                  <CommomCard
                    title={friend.name}
                    click={() => {
                      deleteFriend(friend._id);
                    }}
                  />
                </li>
              ))
            : friends.map((friend) => (
                <li className="friends__list__item" key={friend._id}>
                  <CommomCard
                    title={friend.name}
                    click={() => {
                      deleteFriend(friend._id);
                    }}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginScreen;

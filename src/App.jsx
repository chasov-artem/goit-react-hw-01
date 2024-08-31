import Profile from "./assets/components/Profile/Profile.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./assets/components/FriendList/FriendList.jsx";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;

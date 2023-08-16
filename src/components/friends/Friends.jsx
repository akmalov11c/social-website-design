import "./friends.css";

const Friends = ({ user }) => {
  return (
    <li className="sidebar__friend">
      <img src={user.profilePicture} className="sidebar__img" alt="img" />
      <span className="sidebar__name">{user.username}</span>
    </li>
  );
};

export default Friends;

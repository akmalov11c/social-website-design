import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="right__item">
      <div className="right__profileContainer">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbar__profileImg"
        />
        <span className="right__online"></span>
      </div>
      <span className="right__username">{user.username}</span>
    </li>
  );
};

export default Online;

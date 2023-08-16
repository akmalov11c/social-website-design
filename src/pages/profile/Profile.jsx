import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import ProfileRight from "../../components/profileRight/ProfileRight";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__top">
            <div className="profile__cover">
              <img
                src="/assets/post/3.jpeg"
                alt=""
                className="profile__cover-img"
              />
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="profile__user-img"
              />
            </div>
            <div className="profile__info">
              <h4 className="profile__info-name">Akmalovich</h4>
              <span className="profile__info-desc">Hello my Friends</span>
            </div>
          </div>
          <div className="profile__bottom">
            <Feed />
            <ProfileRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

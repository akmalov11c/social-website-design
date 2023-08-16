import "../rightbar/rightbar.css";
import "./rightprofile.css";

const ProfileRight = () => {
  return (
    <div className="profile__container">
      <h4 className="rightbar__title">User Information</h4>

      <div className="rightbar__info">
        <div className="rightbar__info-item">
          <span className="rightbar__info-key">City:</span>
          <span className="rightbar__info-value">New York:</span>
        </div>
        <div className="rightbar__info-item">
          <span className="rightbar__info-key">From:</span>
          <span className="rightbar__info-value">Madrid:</span>
        </div>
        <div className="rightbar__info-item">
          <span className="rightbar__info-key">Relationship:</span>
          <span className="rightbar__info-value">Single:</span>
        </div>
      </div>

      <h4 className="rightbar__title">User Friends</h4>
      <div className="rightbar__followings">
        <div className="rightbar__following">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
        <div className="rightbar__following">
          <img
            src="/assets/person/2.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
        <div className="rightbar__following">
          <img
            src="/assets/person/3.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
        <div className="rightbar__following">
          <img
            src="/assets/person/4.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
        <div className="rightbar__following">
          <img
            src="/assets/person/5.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
        <div className="rightbar__following">
          <img
            src="/assets/person/6.jpeg"
            alt=""
            className="rightbar__following-img"
          />
          <span className="rightbar__following-name">John Carter</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;

import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="container__top">
      <div className="top__left">
        <span className="logo">
          <span>
            <Link to={"/"} className="link">
              Akmalovich
            </Link>
          </span>{" "}
          Social
        </span>
      </div>
      <div className="top__center">
        <div className="searchbar">
          <i class="ri-search-line"></i>
          <input placeholder="Search here..." className="searchInput" />
        </div>
      </div>
      <div className="top__right">
        <div className="top__links">
          <span className="top__link">Homepage</span>
          <span className="top__link">Timeline</span>
        </div>
        <div className="top__icons">
          <div className="top__icon-item">
            <i class="ri-user-3-line"></i>
            <span className="top__badge">1</span>
          </div>
          <div className="top__icon-item">
            <i class="ri-message-2-line"></i>
            <span className="top__badge">5</span>
          </div>
          <div className="top__icon-item">
            <i class="ri-notification-2-line"></i>
            <span className="top__badge">3</span>
          </div>
        </div>
        <Link to={"profile"}>
          <img src="/assets/person/2.jpg" alt="" className="top__img" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;

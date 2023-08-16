import "./sidebar.css";
import { Users } from "../../data";
import Friends from "../friends/Friends";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <i class="ri-rss-fill sidebar__icon"></i>
            <span className="sidebar__text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-message-2-line sidebar__icon"></i>
            <span className="sidebar__text">Chats</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-video-line sidebar__icon"></i>
            <span className="sidebar__text">Videos</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-group-line sidebar__icon"></i>
            <span className="sidebar__text">Groups</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-bookmark-line sidebar__icon"></i>
            <span className="sidebar__text">Bookmarks</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-question-line sidebar__icon"></i>
            <span className="sidebar__text">Questions</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-briefcase-line sidebar__icon"></i>
            <span className="sidebar__text">Jobs</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-calendar-event-line sidebar__icon"></i>
            <span className="sidebar__text">Events</span>
          </li>
          <li className="sidebar__list-item">
            <i class="ri-graduation-cap-line sidebar__icon"></i>
            <span className="sidebar__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__btn">Show more</button>
        <hr className="sidebar__hr" />
        <ul className="sidebar__friendlist">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="birthday__container">
          <img src="/assets/gift.png" alt="" className="birthday__img" />
          <span className="birt__text">
            <b> Pola Foster</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="right__ad" />
        <h4 className="right__title">Online friends</h4>
        <ul className="right__list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;

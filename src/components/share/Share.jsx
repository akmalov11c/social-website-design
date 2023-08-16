import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img className="share__img" src="/assets/person/2.jpg" alt="" />
          <input className="share__input" placeholder="Type" />
        </div>
        <hr className="share__hr" />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <i class="ri-image-2-line share__icon"></i>
              <span className="share__text">Photo or Video</span>
            </div>
            <div className="share__option">
              <i class="ri-price-tag-line share__icon"></i>
              <span className="share__text">Tag</span>
            </div>
            <div className="share__option">
              <i class="ri-map-pin-2-line share__icon"></i>
              <span className="share__text">Location</span>
            </div>
            <div className="share__option">
              <i class="ri-emoji-sticker-line share__icon"></i>
              <span className="share__text">Feelings</span>
            </div>
          </div>
          <button className="share__btn">Share </button>
        </div>
      </div>
    </div>
  );
};

export default Share;

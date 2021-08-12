import s from './Profile.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class Profile extends React.Component {
  constructor({ name, tag, location, avatar, stats }) {
    super({ name, tag, location, avatar, stats });
    this.name = name;
    this.tag = tag;
    this.location = location;
    this.avatar = avatar;
    this.stats = stats;
  }

  render() {
    return (
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={this.avatar}
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <p className={s.name}>{this.name}</p>
          <p className={s.tag}>@{this.tag}</p>
          <p className={s.location}>{this.location}</p>
        </div>
        <ul className={s.stats}>
          <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{this.stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{this.stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{this.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

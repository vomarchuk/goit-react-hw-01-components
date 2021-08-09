import s from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.Name}>{name}</p>
        <p className={s.Tag}>@{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>

      <ul className={s.Stats}>
        <li className={s.Item}>
          <span className={s.Label}>Followers</span>
          <span className={s.Quantity}>{stats.followers}</span>
        </li>
        <li className={s.Item}>
          <span className={s.Label}>Views</span>
          <span className={s.Quantity}>{stats.views}</span>
        </li>
        <li className={s.Item}>
          <span className={s.Label}>Likes</span>
          <span className={s.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;

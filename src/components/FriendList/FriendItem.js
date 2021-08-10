import PropTypes from 'prop-types';
import s from './FriendList.module.css';
function FriendItem({ avatar, status, name }) {
  return (
    <>
      <span className={status === true ? s.isOnline : s.isOffline}></span>
      <img className={s.Avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.Name}>{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendItem;

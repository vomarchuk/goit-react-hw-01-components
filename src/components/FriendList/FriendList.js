import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.List}>
      {friends.map(friend => (
        <li className={s.Item} key={friend.id}>
          <FriendItem
            status={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default FriendList;

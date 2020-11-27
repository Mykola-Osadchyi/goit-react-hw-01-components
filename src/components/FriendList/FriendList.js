import Friends from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ userFriends }) {
  return (
    <ul className="friend-list">
      {userFriends.map(userFriend => (
        <Friends
          key={userFriend.id}
          avatar={userFriend.avatar}
          name={userFriend.name}
          isOnline={userFriend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  userFriends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;

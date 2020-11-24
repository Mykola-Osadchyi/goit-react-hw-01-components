import PropTypes from 'prop-types';

const UserProfile = (props) => {
  const defaultAvatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg';
  const { name, tag, location, avatar = defaultAvatar, stats, } = props;
    return (<div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        class="avatar"
        width="100"
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers </span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views </span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes </span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>);
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
};

export default UserProfile;
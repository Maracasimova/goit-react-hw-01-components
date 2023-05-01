import PropTypes from 'prop-types';
import style from './friendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.frienditem}>
      {/* <span className={style.friendstatus}></span> */}
      <span className={isOnline ? style.statusOnline : style.statusOffline}></span>
      <img className={avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.friendname}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

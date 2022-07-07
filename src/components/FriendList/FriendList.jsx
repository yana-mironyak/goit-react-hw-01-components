import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const Friend = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => 
                <li key={friend.id} className={css.item}>
                    <span className={friend.isOnline ? css.status : css.status_red}></span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            )}
        </ul>
    )  
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
}
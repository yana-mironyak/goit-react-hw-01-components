import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const Friend = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(item => 
                <li key={item.id} className={css.item}>
                    <FriendListItem item={item} />
                </li>
            )}
        </ul>
    )  
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ item } ) => {
    return ( 
        <>
            <span className={item.isOnline ? css.status : css.status_red}></span>
            <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{item.name}</p>
        </>
    )
}    

FriendListItem.propTypes = {
    item: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
    }),
}
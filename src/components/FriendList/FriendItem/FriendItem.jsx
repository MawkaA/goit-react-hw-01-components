import PropTypes from "prop-types";
import css from "./FriendItem.module.css";

 function FriendItem ({
avatar,name,isOnline
}){
    return(
        <li className={css.item}>
            <span className={isOnline?css.status_true:css.status_false}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendItem.propTypes ={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendItem;
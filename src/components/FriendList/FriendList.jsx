import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendItem from "./FriendItem/FriendItem"; 


export default function FriendList ({friends}){
    return(
        <ul className={css.friendList}>
            {friends.map(({id,isOnline,name,avatar})=>(
                <FriendItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
                />
            ))}
        </ul> 
    );
}

FriendList.propTypes ={
   friends: PropTypes.arrayOf(
       PropTypes.shape({
           avatar: PropTypes.string,
           name: PropTypes.string,
           isOnline: PropTypes.bool,
       })
       ).isRequired, 
}
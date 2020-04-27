import React from "react";
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props;
    return (
      <div>
        <span>Notifications</span>
        <ul>
            { notifications && notifications.map(item => {
                return (
                    <li key={item.id}>
                        <div>
                        <span>{item.user}</span> <span>{item.content}</span>
                        </div>
                        
                        <div>
                            {moment(item.time.toDate()).fromNow()}
                        </div>
                    </li>
                );
            })}
        </ul>
      </div>
    );
}
export default Notifications;

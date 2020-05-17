// import React from "react";
// import { firestoreConnect } from 'react-redux-firebase'
// import { connect } from "react-redux";
// import { compose } from 'redux';

// class NotificationsIcon extends React.Component {
//   render() {
//     const unreadMessageCount = notification.groupChats[selectedGroup]
//     const hasUnreadMessages = unreadMessageCount > 0
//     const iconColor = hasUnreadMessages ? colors.home.indicator : '#000'
//     const { notifications } = this.props;
//     let unreadNotificationsCount
//     if(notifications){
//        unreadNotificationsCount = notifications.length; 
//     }
//     const hasUnreadNotifications = unreadNotificationsCount > 0;
//     return (
//       <div>
//         {hasUnreadNotifications ? (
//           <span>{unreadNotificationsCount}</span>
//         ) : (
//           <span>no notifications</span>
//         )}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     notifications: state.firestore.ordered.notifications,
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
//   ])
//   )(NotificationsIcon)

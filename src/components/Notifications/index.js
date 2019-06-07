import React from 'react';
import Notifications from 'react-notification-system-redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectNotifications } from './selectors';

class NotificationComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { notifications } = this.props;
    console.log('notifications',notifications);
    // Optional styling
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px',
        },

        success: { // Applied only to the success notification item
          color: 'blue',
        },
      },
    };
    return (
      <Notifications
        notifications={notifications}
        style={style}
      />
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  notifications: selectNotifications(),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);

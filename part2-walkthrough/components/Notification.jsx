const Notification = ({ msg }) => {
  if (msg === null) {
    return null;
  }
  return <div className="errorMessage">{msg}</div>;
};

export default Notification;

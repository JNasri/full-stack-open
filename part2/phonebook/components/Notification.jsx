const Notification = ({ msg, styleToggle }) => {
  if (msg === null) {
    return null;
  }
  return (
    <div
      style={
        styleToggle
          ? {
              color: "green",
              background: "lightgrey",
              fontSize: "30px",
              borderStyle: "solid",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "5px",
              textAlign: "center",
            }
          : {
              color: "red",
              background: "black",
              fontSize: "30px",
              borderStyle: "solid",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "5px",
              textAlign: "center",
            }
      }
    >
      {msg}
    </div>
  );
};

export default Notification;

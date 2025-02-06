const NotifyComp = ({ notify }) => {
  return <p style={{
    fontSize:"16px",
    textAlign: "center",
    color:notify.success?"#44cc11":"#bf1029"
  }}>{notify.msg}</p>;
};
export default NotifyComp;

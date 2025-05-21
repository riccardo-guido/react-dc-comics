
const Alert = ({
  message = "Si è verificato un errore",
  textColor = "#721c24",
  backgroundColor = "#f8d7da"
}) => {
  const alertStyle = {
    padding: "1rem",
    borderRadius: "5px",
    color: textColor,
    backgroundColor: backgroundColor,
    border: "1px solid #f5c6cb",
    marginBottom: "1rem"
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;
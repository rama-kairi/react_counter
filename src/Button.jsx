// Button Component
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "1rem 2rem",
        fontSize: "1rem",
        fontWeight: "bold",
        background: `${color}`,
        outline: "none",
        border: "none",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
};

export default Button;

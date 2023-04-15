import "./style.css";

const Button = (props) => {
  const { children, dataTestId } = props;
  return (
    <button className="button" data-test-id={`${dataTestId}-button`}>
      {children}
    </button>
  );
};

export default Button;

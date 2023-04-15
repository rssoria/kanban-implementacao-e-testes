import "./style.css";

const Field = (props) => {
  const {
    type = "text",
    label,
    placeholder,
    obrigatorio,
    valor,
    aoAlterado,
    dataTestId,
  } = props;

  const aoDigitar = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`} data-test-id={`field-${dataTestId}`}>
      <label data-test-id={`field-${dataTestId}-label`}>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        placeholder={placeholder}
        required={obrigatorio}
        data-test-id={`field-${dataTestId}-input`}
      />
    </div>
  );
};

export default Field;

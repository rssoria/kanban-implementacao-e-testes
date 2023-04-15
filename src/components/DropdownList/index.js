import "./style.css";

const DropdownList = ({
  label,
  itens,
  obrigatorio,
  valor,
  aoAlterado,
  dataTestId,
}) => {
  return (
    <div className="dropdown-list" data-test-id={`${dataTestId}-dropdownlist`}>
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        data-test-id={`${dataTestId}-dropdownlist-select`}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option
            key={item}
            data-test-id={`${dataTestId}-dropdownlist-${item}`}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;

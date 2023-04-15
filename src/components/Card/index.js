import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";
import DropdownList from "../DropdownList";

const Card = ({
  id,
  titulo,
  descricao,
  aoDeletar,
  colunas,
  coluna,
  mudarColuna,
}) => {
  return (
    <div className="colaborador" data-test-id="card">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
        data-test-id="card-delete-button"
      />
      <div className="rodape">
        <h4>{titulo}</h4>
        <h5>{descricao}</h5>
        <DropdownList
          itens={colunas}
          valor={coluna}
          aoAlterado={(valor) => mudarColuna(valor, id)}
          dataTestId="card"
        />
      </div>
    </div>
  );
};

export default Card;

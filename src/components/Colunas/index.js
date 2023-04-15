import "./style.css";
import Coluna from "../Coluna";

const Colunas = ({ colunas, cards, aoDeletar, mudarColuna }) => {
  return (
    <div className="colunas">
      {colunas.map((coluna) => (
        <Coluna
          key={coluna.id}
          nome={coluna.nome}
          cor={coluna.cor}
          id={coluna.id}
          cards={cards.filter((card) => card.coluna === coluna.nome)}
          aoDeletar={aoDeletar}
          colunas={colunas}
          mudarColuna={mudarColuna}
        ></Coluna>
      ))}
    </div>
  );
};

export default Colunas;

import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./style.css";

const Coluna = (props) => {
  const { nome, cor, cards, aoDeletar, colunas, mudarColuna } = props;
  return (
    <section
      className="coluna"
      style={{ backgroundColor: hexToRgba(cor, "0.6") }}
    >
      <h3 style={{ borderColor: cor }}>{nome}</h3>
      <div className="cards" data-test-id={`cards-coluna-${nome}`}>
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            titulo={card.titulo}
            descricao={card.descricao}
            corDeFundo={cor}
            aoDeletar={aoDeletar}
            colunas={colunas.map((coluna) => coluna.nome)}
            coluna={nome}
            mudarColuna={mudarColuna}
          />
        ))}
      </div>
    </section>
  );
};

export default Coluna;

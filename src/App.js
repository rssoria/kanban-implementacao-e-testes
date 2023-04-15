import { useState } from "react";
import Form from "./components/Form";
import Titulo from "./components/Titulo";
import { v4 as uuidv4 } from "uuid";
import Colunas from "./components/Colunas";

function App() {
  const colunas = [
    { nome: "To Do", cor: "#F6F6F6", id: uuidv4() },
    { nome: "Developing", cor: "#F6F6F6", id: uuidv4() },
    { nome: "QA", cor: "#F6F6F6", id: uuidv4() },
    { nome: "Done", cor: "#F6F6F6", id: uuidv4() },
  ];
  const [cards, setCards] = useState([]);

  const aoNovoColaboradorAdicionado = (card) => {
    setCards([...cards, card]);
  };

  const deletarColaborador = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const mudarColuna = (valor, id) => {
    const card = cards.find((card) => card.id === id);
    const cardsFiltered = cards.filter((card) => card.id !== id);
    card.coluna = valor;
    cardsFiltered.push(card);
    setCards(cardsFiltered);
  };

  return (
    <div className="App">
      <Form
        aoCadastrar={(card) => aoNovoColaboradorAdicionado(card)}
        colunas={colunas.map((coluna) => coluna.nome)}
      />
      <Titulo titulo="Board do meu time" />
      <div className="colunas">
        <Colunas
          colunas={colunas}
          cards={cards}
          aoDeletar={deletarColaborador}
          mudarColuna={mudarColuna}
        />
      </div>
    </div>
  );
}

export default App;

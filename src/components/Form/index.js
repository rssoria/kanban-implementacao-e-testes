import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Field from "../Field";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { aoCadastrar, colunas } = props;

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [coluna, setColuna] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoCadastrar({
      id: uuidv4(),
      titulo,
      descricao,
      coluna,
    });
    setTitulo("");
    setDescricao("");
    setColuna("");
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar} data-test-id="add-card-form">
        <h2>Preencha os dados para criar o card</h2>
        <Field
          valor={titulo}
          obrigatorio
          label="Titulo"
          placeholder="Digite o nome da tarefa"
          aoAlterado={(valor) => setTitulo(valor)}
          dataTestId="titulo"
        />
        <Field
          valor={descricao}
          obrigatorio
          label="Descrição"
          placeholder="Digite a descrição da tarefa"
          aoAlterado={(valor) => setDescricao(valor)}
          dataTestId="descricao"
        />
        <DropdownList
          valor={coluna}
          obrigatorio
          label="Coluna"
          itens={colunas}
          aoAlterado={(valor) => setColuna(valor)}
          dataTestId="colunas"
        />
        <Button dataTestId="create-card">Criar card</Button>
      </form>
    </section>
  );
};

export default Form;

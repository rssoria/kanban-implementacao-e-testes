import "./style.css";

const Titulo = (props) => {
  const { titulo } = props;

  return (
    <div className="titulo">
      <h1>{titulo}</h1>
    </div>
  );
};

export default Titulo;

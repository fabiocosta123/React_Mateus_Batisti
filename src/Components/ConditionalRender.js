import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Pedro");
  return (
    <div>
      <h1>Isso será exibido</h1>
      {x && <p>Se x for true, Sim</p>}
      <h1>
        <b>IF ternário</b>
      </h1>
      {name === "Pedro" ? (
        <div>
          <p>Você não é o Fábio</p>
        </div>
      ) : (
        <div>
          <p>Fala Fábio, blz</p>
        </div>
      )}
      <button onClick={() => setName("Fábio")}>
        Clique aqui para mudar de nome
      </button>
    </div>
  );
};

export default ConditionalRender;

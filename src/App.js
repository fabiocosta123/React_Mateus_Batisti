import { useState } from "react";

import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";
import Fragments from "./Components/Fragments";
import Container from "./Components/Container";
import ExecuteFunctions from "./Components/ExecuteFunctions";
import Message from "./Components/Message";
import ChangeMessageStates from "./Components/ChangeMessageStates";

const App = () => {
  const cars = [
    { marca: "Pegeout", km: 12000, cor: "Bege", newCar: false },

    { marca: "Ferrari", km: 0, cor: "Amarelo", newCar: true },
    { marca: "Porsche", km: 0, cor: "Vermelho", newCar: true },
    { marca: "Toyota", km: 50000, cor: "Preto", newCar: false },
  ];

  const ShowMessage = () => {
    alert("Evento do componente Pai");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        {/*props*/}
        <ShowUserName name="Igor" />
        {/*Destructor/destruturando pops*/}
        <CarDetails marca="Honda" km={200000} cor="Bege" newCar={false} />
        {/*reaproveitando componentes */}
        <CarDetails marca="Ford" km={100000} cor="azul" newCar={false} />
        <CarDetails marca="fiat" km={0} cor="Branco" newCar={true} />
        <CarDetails marca="VW" km={0} cor="Prata" newCar={true} />
        {/*loop em lista usando map */}
        {cars.map((cars) => (
          <CarDetails
            key={cars.id}
            marca={cars.marca}
            km={cars.km}
            cor={cars.cor}
            newCar={cars.newCar}
          />
        ))}
        <Fragments />
        {/*children props */}
        <Container MyValue="testando">
          <p>Aqui estou usando o children</p>
        </Container>
        {/*Executando funções */}
        <ExecuteFunctions ShowMessage={ShowMessage} />
        {/*State lift */}
        <Message msg={message} />
        <ChangeMessageStates handleMessage={handleMessage} />
      </div>
    </div>
  );
};

export default App;

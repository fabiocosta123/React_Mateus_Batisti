import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";

const App = () => {
  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        {/*props*/}
        <ShowUserName name="Igor" />
        {/*Destructor/desustruturando pops*/}
        <CarDetails marca="Honda" km={200000} cor="Bege" newCar={false} />
        {/*reaproveitando componentes */}
        <CarDetails marca="Ford" km={100000} cor="azul" newCar={false} />
        <CarDetails marca="fiat" km={0} cor="Branco" newCar={true} />
        <CarDetails marca="VW" km={0} cor="Prata" newCar={true} />
      </div>
    </div>
  );
};

export default App;

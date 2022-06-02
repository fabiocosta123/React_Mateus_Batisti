import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";

const App = () => {
  const cars = [
    { marca: "Pegeout", km: 12000, cor: "Bege", newCar: false },

    { marca: "Ferrari", km: 0, cor: "Amarelo", newCar: true },
    { marca: "Porsche", km: 0, cor: "Vermelho", newCar: true },
    { marca: "Toyota", km: 50000, cor: "Preto", newCar: false },
  ];

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
            marca={cars.marca}
            km={cars.km}
            cor={cars.cor}
            newCar={cars.newCar}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

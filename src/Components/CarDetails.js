// destruturando a props não preciso colocar props.algumaCoisa, a destruturação é feita entre chaves
const CarDetails = ({ marca, km, cor, newCar }) => {
  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        <li>marca: {marca}</li>
        <li>km: {km}</li>
        <li>cor:{cor}</li>
      </ul>
      {newCar ? <p>Este carro é novo</p> : <p>Este carro é usado</p>}
    </div>
  );
};

export default CarDetails;

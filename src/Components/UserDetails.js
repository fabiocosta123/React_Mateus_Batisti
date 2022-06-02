//exercicio proposto do curso,
//criar função que diga se pode ou não tirar habilitação

const UserDetails = ({ name, job, age }) => {
  return (
    <div>
      <h1>lista nomes</h1>
      <ul>
        <li>nome:{name}</li>
        <li>profissão:{job}</li>
        <li>idade:{age}</li>
      </ul>
      {age >= 18 ? <p>Maior de idade</p> : <p>Menor de idade</p>}
    </div>
  );
};

export default UserDetails;

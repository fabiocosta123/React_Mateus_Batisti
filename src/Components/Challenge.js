const Challenge = () => {
  let a = 5;
  let b = 5;

  const soma = (e) => {
    alert(a + b);
  };

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={soma}>Clique Aqui para somar</button>
    </div>
  );
};

export default Challenge;

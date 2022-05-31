const Event = () => {
  const cliqueAqui = (e) => {
    console.log(e);
  };
  return (
    <div>
      <button onClick={cliqueAqui}>Cique Aqui</button>
    </div>
  );
};

export default Event;

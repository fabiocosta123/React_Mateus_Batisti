import MyComponent from "./MyComponent";

const TemplateExpression = () => {
  const name = "Fábio";
  const data = {
    age: 38,
    job: "programer",
  };

  return (
    <div>
      <p>Olá, tudo bem ? {name}</p>
      <p>
        Você trabalha como {data.job} e tem {data.age} de idade
      </p>
      <MyComponent />
    </div>
  );
};

export default TemplateExpression;

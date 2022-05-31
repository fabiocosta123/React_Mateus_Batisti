import FirstComponent from "./Components/FirstComponent";
import TemplateExpression from "./Components/TemplateExpression";
import Event from "./Components/Events";
//styles.css
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <Event />
    </div>
  );
}

export default App;

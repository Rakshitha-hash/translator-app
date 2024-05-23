import "./App.css";
import TextField from "./Components/textfield";
import LanguageSelection from "./Components/languageSelection";
import Output from "./Components/output";

function App() {
  return (
    <div className="App">
      <div className="titleStyle">Translator App</div>
      <div className="alignment">
        <TextField />
        <LanguageSelection />
        <Output />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import RefTutorial from "./component/useRef";
import LayoutTutorial from "./component/UseLayout";
import ImperativeTutorial from "./component/UseImperative";
import ContextTutorial from "./component/UseContext";
import MemoTutorial from "./component/UseMemo";
import CallBackTutorial from "./component/UseCallback";
import QueryTutorial from "./component/UseQuery";

function App() {
  return (
    <div className="App">
      {/* <RefTutorial /> */}
      {/* <LayoutTutorial /> */}
      {/* <ImperativeTutorial /> */}
      {/* <ContextTutorial /> */}
      {/* <MemoTutorial /> */}
      {/* <CallBackTutorial /> */}
      <QueryTutorial />
    </div>
  );
}

export default App;

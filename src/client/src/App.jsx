import AcessTokenInput from "./components/AccessTokenInput/AccessTokenInput";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">AI ASSISTED JIRA CREATOR</h1>
      <div>
        <AcessTokenInput />
      </div>
    </div>
  );
};

export default App;

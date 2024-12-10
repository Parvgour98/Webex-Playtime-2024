import "./App.css";
import AcessTokenInput from "./components/AccessTokenInput/AccessTokenInput";
import MeetingForm from "./components/MeetingForm/MeetingForm";

const App = () => {
  return (
    <div className="aijc-container">
      <h1 className="aijc-title">AI POWERED CONFLUENCE PAGE CREATOR</h1>
      <div className="aijc-content">
        <AcessTokenInput placeholder="Enter your Webex access token" />
        <AcessTokenInput placeholder="Enter your Confluence access token" />
        <MeetingForm />
      </div>
    </div>
  );
};

export default App;

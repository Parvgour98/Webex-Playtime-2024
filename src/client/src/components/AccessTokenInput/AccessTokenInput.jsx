import { useState } from "react";
import "./AccessTokenInput.css";

const AcessTokenInput = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setAccessToken("");
  };

  return (
    <form className="access-token-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="access-token-input"
        type="text"
        id="accessToken"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
        placeholder="Enter your access token"
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AcessTokenInput;

import { useState } from "react";
import "./AccessTokenInput.css";
import PropTypes from "prop-types";

const AcessTokenInput = ({ placeholder }) => {
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(accessToken);

    localStorage.setItem("access-token", accessToken);
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
        placeholder={placeholder}
      />
      <button className="submit-button" type="submit">
        Save Token
      </button>
    </form>
  );
};

AcessTokenInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default AcessTokenInput;

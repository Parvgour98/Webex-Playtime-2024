import CustomDropdown from "../CustomDropdown/CustomDropdown";
import "./MeetingForm.css";

const MeetingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Hola");
  };
  return (
    <form className="gcw-form" onSubmit={handleSubmit}>
      <h2 className="gcw-title">Generate Wiki</h2>
      <CustomDropdown />
      <button className="gcw-submit-button" type="submit">
        Generate Confluence Wiki
      </button>
    </form>
  );
};

export default MeetingForm;

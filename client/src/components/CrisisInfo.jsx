import Wrapper from "../assets/wrappers/CrisisInfo";
function CrisisInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </Wrapper>
  );
}

export default CrisisInfo;

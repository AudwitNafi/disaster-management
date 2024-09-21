import Wrapper from "../assets/wrappers/Home";

function Dashboard() {
  return (
    <Wrapper>
      <div className="funds">
        <div className="title">Total Funds</div>
        <div className="page">
          <span className="bdt">BDT</span>
          <h1>500,000,0000.39</h1>
        </div>
      </div>
      <div className="crisis-volunteer-container">
        <div className="cv-container">
          <h3>Crisis</h3>
        </div>
        <div className="cv-container">
          <h3>Volunteers</h3>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;

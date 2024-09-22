import Wrapper from "../assets/wrappers/CrisisShort";

function CrisisShort({ title, status, severity, location }) {
  return (
    <Wrapper>
      <div className="crisis-card">
        <h5 className="crisis-card__title">{title}</h5>
        <div className="crisis-card__details">
          <p>
            <span
              className={`crisis-card__status crisis-card__status--${status.toLowerCase()}`}
            >
              {status}
            </span>
          </p>
          <div className="info">
            <p>
              <strong>Severity:</strong>{" "}
              <span
                className={`crisis-card__severity ${severity.toLowerCase()}`}
              >
                {severity}
              </span>
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CrisisShort;

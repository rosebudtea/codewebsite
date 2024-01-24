export default function UserInput({ userInput, onNumChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p className="input-panel">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onNumChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p className="input-panel">
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onNumChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p className="input-panel">
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onNumChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p className="input-panel">
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onNumChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

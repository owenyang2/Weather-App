import './PredictionGame.css'

function PredictionGame() {
    return (
        <div className="main-content">
            <ul className="list-group">
                <li className="list-group-item">
                    <h2>Today's Prediction</h2>
                    <form>
                        <div className="prediction-form">
                            <label htmlFor="pred-select" className="form-label">Enter Your Prediction for Tomorrow's High Temperature in Toronto</label>
                            <div className="input-with-unit">
                                <input type="number" className="form-control pred-select" id="pred-select" aria-describedby="current-pred" />
                                <span className="unit">°C</span>
                            </div>
                            <div id="current-pred" className="form-text">Current Prediction: N/A</div>
                        </div>
                    </form>
                </li>
                <li className="list-group-item">
                    <h2>Yesterday's Results</h2>
                </li>
            </ul>
        </div>
    )
}

export default PredictionGame;
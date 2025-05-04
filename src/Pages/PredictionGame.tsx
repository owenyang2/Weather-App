import { useState } from 'react';
import './PredictionGame.css'

function PredictionGame() {
    const [currentPrediction, setPrediction] = useState<number | null>(null);

    function submitPrediction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);    
        const formJson = Object.fromEntries(formData.entries());
        
        setPrediction(Number(formJson.prediction)); // update prediction
    }

    return (
        <div className="main-content">
            <ul className="list-group">
                <li className="list-group-item">
                    <h2>Today's Prediction</h2>
                    <form onSubmit={submitPrediction}>
                        <div className="prediction-form">
                            <label htmlFor="temp-input" className="form-label">Enter Your Prediction for Tomorrow's High Temperature in Toronto</label>
                            <div className="input-with-unit">
                                <input name="prediction" type="number" className="form-control" id="temp-input" aria-describedby="current-pred" />
                                <span className="unit">°C</span>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div id="current-pred" className="form-text">Current Prediction: {currentPrediction ? currentPrediction + "°C" : "N/A"}
                            </div>
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
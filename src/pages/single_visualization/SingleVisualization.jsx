import ArrayBar from "../components/array_bar/ArrayBar.jsx";
import "./SingleVisualization.css";

function SingleVisualization({ name, worstTimeComplexity, 
    avgTimeComplexity, bestTimeComplexity,
    source, sortingFunction=null }) {
    return (
        <div className="single-visualization">
            <ArrayBar />
            <div className="details">
                <h3 className="detail-heading">Time Complexity</h3>
                <p>Worst case {worstTimeComplexity}</p>
                <p>Average case {avgTimeComplexity}</p>
                <p>Best case {bestTimeComplexity}</p>

                <h3 className="detail-heading">Source</h3>
                <a href={source} target="_blank">{source}</a>

                <hr />

                <h3 className="detail-heading">Setting</h3>
                <div className="input-box">
                    <input type="checkbox" />
                    <p>Instant Sorting</p>
                </div>

                <div className="input-box">
                    <h5>Order Type</h5>
                    <select name="order-type">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>

                <div className="input-box">
                    <h5>Delay</h5>
                    <input type="number" min="0" />
                    <h5>ms</h5>
                </div>

                <div className="button-box">
                    <button className="start-button">Start</button>
                    <button className="pause-button">Pause</button>
                    <button className="reset-button">Reset</button>
                    <button className="next-step-button">Next Step</button>
                </div>

                <hr />

                <h3 className="detail-heading">Result</h3>
                <p>n = </p>
                <h4 className="detail-heading">Work Count</h4>
                <p>Comparison: </p>
                <p>Swap: </p>
                <p>Total: </p>
                <h4 className="detail-heading">Time</h4>
                <p> ms</p>

                <button className="compare-mode-button">Compare mode</button>

            </div>
        </div>
    );
}

export default SingleVisualization
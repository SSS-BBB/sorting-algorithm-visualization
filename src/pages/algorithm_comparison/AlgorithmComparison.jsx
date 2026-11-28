import { useState } from "react";
import ArrayBar from "../components/array_bar/ArrayBar.jsx";
import styles from "./AlgorithmComparison.module.css";
import algorithms from "../../data/algorithms.json";

function AlgorithmComparison({ normalizedArray }) {
    const [defaultArray, setDefaultArray] = useState(normalizedArray);

    const compareItems = algorithms.map(element =>
        <li key={element.id} className={styles["compare-item"]}>
            <ArrayBar normalizedArray={defaultArray} showNumber={false} showIndex={false} />
            <div className={styles["compare-detail"]}>
                <h3>Bubble Sort</h3>
                <p>n = 100</p>
                <h4>Work Counts</h4>
                <div className={styles["compare-work-count"]}>
                    <p>Comparisons: 15</p>
                    <p>Swaps: 12</p>
                    <p>Total: 27</p>
                </div>
            </div>
        </li>
    );

    return (
        <div className={styles["algorithm-comparison"]}>
            <button className={styles["edit-all-button"]}>
                Edit Array for all
            </button>

            <ul className={styles["compare-container"]}>
                {compareItems}
            </ul>

            <button className={styles["add-algo-button"]}>
                Add Algorithm
            </button>

            <h3 className={styles["setting"]}>Setting</h3>

            <div className={styles["input-box"]}>
                <input type="checkbox" />
                <p>Instant sorting</p>
            </div>

            <div className={styles["input-box"]}>
                <h5>Order type</h5>
                <select name="order-type">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <div className={styles["input-box"]}>
                <h5>Delay</h5>
                <input type="number" min={0} />
                <h5>ms</h5>
            </div>

            <div className={styles["button-container"]}>
                <button className={styles["start-button"]}>Start</button>
                <button className={styles["pause-button"]}>Pause</button>
                <button className={styles["reset-button"]}>Reset</button>
                <button className={styles["next-step-button"]}>Next Step</button>
            </div>

        </div>
    );
}

export default AlgorithmComparison
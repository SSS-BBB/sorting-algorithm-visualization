import AlgorithmCard from "./components/AlgorithmCard.jsx";
import algorithms from "../../data/algorithms.json";
import "./AlgorithmSelection.css";

function AlgorithmSelection() {

    const algorithmListItems = algorithms.map(algorithm =>
        <li>
            <AlgorithmCard
                key={algorithm.id}
                name={algorithm.name}
                worstTimeComplexity={algorithm.timeComplexity.worstCase}
                avgTimeComplexity={algorithm.timeComplexity.averageCase}
                bestTimeComplexity={algorithm.timeComplexity.bestCase} />
        </li>
    );

    return (
        <div className="algorithm-selection">
            <h2>Select Algorithm to Visualize</h2>
            <ul className="algorithm-grid">
                {algorithmListItems}
            </ul>
        </div>
    );
}

export default AlgorithmSelection
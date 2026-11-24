import AlgorithmCard from "./components/AlgorithmCard.jsx";
import "./AlgorithmSelection.css"

function AlgorithmSelection() {

    return (
        <div className="algorithm-selection">
            <h2>Select Algorithm to Visualize</h2>
            <div className="algorithm-grid">
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
                <AlgorithmCard 
                    name="Bubble Sort" 
                    summary="Compare current element to the next element, and swap if necessary"
                    avgTimeComplexity="O(n^2)"
                    />
            </div>
        </div>
    );
}

export default AlgorithmSelection
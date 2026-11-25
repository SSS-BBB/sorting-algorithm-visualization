import ArrayBar from "../components/array_bar/ArrayBar.jsx";

function SingleVisualization({ name, worstTimeComplexity, 
    avgTimeComplexity, bestTimeComplexity,
    source, sortingFunction=null }) {
    return (
        <div className="single-visualization">
            <ArrayBar />
        </div>
    );
}

export default SingleVisualization
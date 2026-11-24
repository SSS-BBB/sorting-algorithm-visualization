function AlgorithmCard({ name, summary, avgTimeComplexity }) {
    
    const cardStyle = {
        backgroundColor: "var(--primary-color)",
        padding: "12px",
        border: "2px solid black"
    };

    const nameStyle = {
        backgroundColor: "var(--secondary-color)",
        padding: "8px",
        color: "var(--secondary-font-color)",
        textAlign: "center"
    };

    const lineStyle = {
        border: "none",
        height: "2px",
        backgroundColor: "var(--primary-font-color)"
    };
    
    return (
        <div style={cardStyle}>
            <h3 style={nameStyle}>{name}</h3>
            <hr style={lineStyle} />
            <p>{summary}</p>
            <p>Average Time Complexity {avgTimeComplexity}</p>
        </div>
    );
}

export default AlgorithmCard
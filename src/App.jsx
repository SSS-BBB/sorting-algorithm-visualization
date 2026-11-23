import { useState } from "react";
import AlgorithmSelection from "./pages/algorithm_selection/AlgorithmSelection.jsx"
import SingleVisualization from "./pages/single_visualization/SingleVisualization.jsx"
import DataEdit from "./pages/data_edit/DataEdit.jsx"
import AlgorithmComparison from "./pages/algorithm_comparison/AlgorithmComparison.jsx"
import Page from "./Enums.js"
import "./App.css"

function Header({ headerTitle, prevPage }) {
  return (
    <div className="header">
      {prevPage ? <button className="back">←</button> : <></>}
      <h2>{headerTitle}</h2>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.ALGORITHM_SELECTION);
  let prevPage = null;
  let headerTitle = "Sorting Algorithm Visualization";

  return (
    <div>
      <Header headerTitle={headerTitle} prevPage={prevPage} />

      {currentPage === Page.ALGORITHM_SELECTION && <AlgorithmSelection />}
      {currentPage === Page.SINGLE_VISUALIZATION && <SingleVisualization />}
      {currentPage === Page.DATA_EDIT && <DataEdit />}
      {currentPage === Page.ALGORITHM_COMPARISON && <AlgorithmComparison />}
    </div>
  );
}

export default App
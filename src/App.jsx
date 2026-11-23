import { useState } from "react";
import AlgorithmSelection from "./pages/algorithm_selection/AlgorithmSelection.jsx"
import SingleVisualization from "./pages/single_visualization/SingleVisualization.jsx"
import DataEdit from "./pages/data_edit/DataEdit.jsx"
import AlgorithmComparison from "./pages/algorithm_comparison/AlgorithmComparison.jsx"
import Page from "./Enums.js"

function App() {
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(Page.ALGORITHM_SELECTION);

  return (
    <>
      {currentPage === Page.ALGORITHM_SELECTION && <AlgorithmSelection />}
      {currentPage === Page.SINGLE_VISUALIZATION && <SingleVisualization />}
      {currentPage === Page.DATA_EDIT && <DataEdit />}
      {currentPage === Page.ALGORITHM_COMPARISON && <AlgorithmComparison />}
    </>
  );
}

export default App
import { useState } from "react";
import AlgorithmSelection from "./pages/algorithm_selection/AlgorithmSelection.jsx"
import SingleVisualization from "./pages/single_visualization/SingleVisualization.jsx"
import DataEdit from "./pages/data_edit/DataEdit.jsx"
import AlgorithmComparison from "./pages/algorithm_comparison/AlgorithmComparison.jsx"
import Page from "./Enums.js"
import algorithms from "./data/algorithms.json";
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
  const [currentPage, setCurrentPage] = useState(Page.DATA_EDIT);
  let prevPage = Page.SINGLE_VISUALIZATION;
  let headerTitle = "Data Edit for Bubble sort algorithm";

  const array = [40, 30, 20, 35, 32, 59, 46, 48];
  const minElement = Math.min(...array);
    if (minElement <= 0) {
        console.log("Cannot have element less than or equal to 0 in an array.");
        return (<></>);
    }

    const maxElement = Math.max(...array);

    // add key to each element and convert each element to be from 0 to 1 proportional to its value
    const normalizedArrayTemp = [];
    array.map((element, index) => {
        const normalizedElement = {};
        normalizedElement.key = index;
        normalizedElement.value = element;
        normalizedElement.normalizedValue = element / maxElement;
        normalizedArrayTemp.push(normalizedElement);
    });
    const normalizedArray = normalizedArrayTemp;

  return (
    <div>
      <Header headerTitle={headerTitle} prevPage={prevPage} />

      {currentPage === Page.ALGORITHM_SELECTION && <AlgorithmSelection />}
      {currentPage === Page.SINGLE_VISUALIZATION && 
        <SingleVisualization 
          normalizedArray={normalizedArray}
          worstTimeComplexity={algorithms[0].timeComplexity.worstCase}
          avgTimeComplexity={algorithms[0].timeComplexity.averageCase}
          bestTimeComplexity={algorithms[0].timeComplexity.bestCase}
          source={algorithms[0].source}
        />
      }
      {currentPage === Page.DATA_EDIT && <DataEdit normalizedArrayToEdit={normalizedArray} />}
      {currentPage === Page.ALGORITHM_COMPARISON && <AlgorithmComparison />}
    </div>
  );
}

export default App
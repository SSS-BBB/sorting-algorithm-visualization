import { useState } from "react";
import ArrayBar from "../components/array_bar/ArrayBar.jsx";
import algorithms from "../../data/algorithms.json";
import "./DataEdit.css";

function DataEdit({ normalizedArrayToEdit }) {

    function handleElementChange() {

    }

    const [array, setArray] = useState(normalizedArrayToEdit);
    
    const algorithmOptions = algorithms.map(algorithm => 
        <option key={algorithm.id} value={algorithm.id}>
            {algorithm.name}
        </option>
    );

    const arrayItems = array.map((element, index) => 
        <li key={element.key}>
            <span className="data-edit-index">{index}</span>
            <input type="number" min={1} className="data-edit-element" value={element.value} onChange={handleElementChange} />
            <button className="data-edit-remove-button" />
        </li>
    );

    return (
        <div className="data-edit">
            <ArrayBar normalizedArray={normalizedArrayToEdit} showHover={false} />
            <div className="data-edit-setting">

                <div className="data-edit-input-box">
                    <h5>Array Size (n) = 8</h5>
                </div>

                <ul className="data-edit-array">
                    {arrayItems}
                </ul>
                
                <button className="data-edit-add-element">
                    Add Element
                </button>

                <div className="data-edit-input-box center">
                    <div className="data-edit-input-box">
                        <input type="checkbox" />
                        <p>Show Number</p>
                    </div>
                    <div className="data-edit-input-box">
                        <input type="checkbox" />
                        <p>Show Index</p>
                    </div>
                </div>

                <div className="data-edit-input-box">
                    <h5>Size</h5>
                    <input type="number" className="data-edit-size-input" />
                    <button className="data-edit-gen-random">
                        Generate Randomly
                    </button>
                </div>
                

                <div className="data-edit-algo-setting">
                    <div className="data-edit-input-box">
                        <h5>Algorithm</h5>
                        <select name="algorithm-name">
                            {algorithmOptions}
                        </select>
                    </div>
                    <div className="data-edit-input-box">
                        <h5>Order type</h5>
                        <select name="order-type">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>

                <div className="data-edit-gen-best-and-worst">
                    <button className="data-edit-gen-best">Generate Best case</button>
                    <button className="data-edit-gen-worst">Generate Worst case</button>
                </div>

                <button className="data-edit-done">
                    Done
                </button>

            </div>
        </div>
    );
}

export default DataEdit
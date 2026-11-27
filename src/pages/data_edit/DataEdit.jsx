import { useState } from "react";
import ArrayBar from "../components/array_bar/ArrayBar.jsx";
import algorithms from "../../data/algorithms.json";
import "./DataEdit.css";

function DataEdit({ normalizedArrayToEdit }) {
    const [array, setArray] = useState(normalizedArrayToEdit);
    
    const algorithmOptions = algorithms.map(algorithm => 
        <option key={algorithm.id} value={algorithm.id}>
            {algorithm.name}
        </option>
    );

    const arrayItems = array.map((element, index) => 
        <li key={element.key}>
            <span className="data-edit-index">{index}</span>
            <span className="data-edit-element">{element.value}</span>
            <button className="data-edit-remove-button" />
        </li>
    );

    return (
        <div className="data-edit">
            <ArrayBar normalizedArray={normalizedArrayToEdit} showHover={false} />
            <div className="data-edit-setting">

                <div className="data-edit-input-box">
                    <h5>Array Size (n)</h5>
                    <input type="number" min="0" />
                </div>

                <ul className="data-edit-array">
                    {arrayItems}
                </ul>
                
                <div className="data-edit-input-box">
                    <div className="data-edit-input-box">
                        <input type="checkbox" />
                        <p>Show Number</p>
                    </div>
                    <div className="data-edit-input-box">
                        <input type="checkbox" />
                        <p>Show Index</p>
                    </div>
                </div>

                <button className="data-edit-gen-random">
                    Generate Randomly
                </button>

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
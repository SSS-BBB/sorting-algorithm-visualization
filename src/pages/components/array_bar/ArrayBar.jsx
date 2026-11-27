import "./ArrayBar.css";

function ArrayBar({ normalizedArray, 
    showNumber = true, showIndex = true, showHover = true }) {

    const maximumHeight = 100; // %

    const elementBar = normalizedArray.map((element, index) =>
                <li className="bar-container" key={element.key}>
                    <div
                     style={{height: `${element.normalizedValue * maximumHeight}%`}}
                     className="element-bar">
                        {showNumber ? element.value : ""}
                    </div>

                    { showIndex ? index : "" }

                </li>
                )

    return (
        <ul className={`array-bar ${showHover ? "show-hover" : ""}`}>
            {elementBar}
            <button className="edit-array-button">
                Edit Array
            </button>
        </ul>
    );
}

export default ArrayBar
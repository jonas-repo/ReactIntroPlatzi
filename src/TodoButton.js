import React from "react";
import './TodoButton.css';

function TodoButton(){
    const onClickButton = () => {
        alert("click");
    }


    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
        +
        </button>
    )
}

export {TodoButton};
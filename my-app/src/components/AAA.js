import React, { useState } from "react";

function AAA() {
    // useState
    const color_aqua = {
        color: 'aqua'
    }
    const color_black = {
        color: 'black'
    }
    const show = {
        opacity: 0 
    }
    const [State, setState] = useState('State_value');
    const [StateColor, setStateColor] = useState(color_aqua);
    const [StateNum1, setStateNum1] = useState(0);
    const [StateNum2, setStateNum2] = useState(0);
    const [StateToggle, setStateToggle] = useState(true);
    const ClickStateColor = () => {
        if(StateColor != color_aqua) {
            setStateColor(color_black)
        } else if(StateColor == color_black) {
            setStateColor(color_aqua)
        }
        setStateNum1(StateNum1+1);
    }
    const ClickStateShow = () => {
        show.opacity = 0
        setStateNum2(StateNum2+1);
    }
    return (
        <div>
            <div>
                <h1 className="show" style={StateColor}>{State}</h1>
                <button onClick={(ClickStateColor)}>Color</button>
                {StateNum1}
                <button onClick={(ClickStateShow)}>Show</button>
                {StateNum2}
            </div>

        </div>
    )
}

export default AAA;
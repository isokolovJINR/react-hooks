import React from 'react';
import {useRef} from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
    const refDiv = useRef(null);
    const isHovering = useHover(refDiv);
    console.log(isHovering)
        return (
        <div  ref={refDiv} style={{width: 300, height: 300, background: 'red'}}>
            
        </div>
    );
};

export default Hover;
import React, {useEffect, useRef, useState} from 'react';
import useScroll from "../hooks/useScroll";

const List = () => {
    const [toDos, setToDos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();

    const intersected = useScroll(parentRef, childRef, () => fetchToOos(page, limit))

    function fetchToOos (page, limit)  {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setToDos(prev => [...prev, ...json]);
                setPage(prev => prev + 1 );
            })
    }


    return (
        <div ref={parentRef} style={{height: '80vh', overflow: "auto"}}>
            {toDos.map(todo =>
                <div style={{padding: 30, border: '2px solid black'}} key={todo.id}>
                    {todo.id} {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height:20, background: 'green'}}></div>
        </div>
    );
};

export default List;
import React, { useEffect, useRef, useState } from 'react';
import useScroll from "./useScroll";

//const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";


const Request = () => {
    const [todosRes, setTodosRes] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    let topic = "car";

    const parentRef = useRef();
    const childRef = useRef();
    //const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    function fetchTodos(page, limit, topic) {
        fetch(`https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=${limit}`, {
            headers: {
                Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
            }
        })
            .then(response => response.json())
            .then(json => {

                setTodosRes(json)

                /* setTodosRes(prev => [...prev, ...json]);
                setPage(prev => prev + 1); */

                /*setTodosRes(prev => {
                  const resPrev = prev ? prev : {};
                  return [...resPrev, ...json]
                })
                setTodosRes(json);*/
            })
    }

    useEffect(() => {
        fetchTodos(page, limit, topic);
    }, [])



    return (
        <div ref={parentRef} /*style={{ height: '1000px', overflow: 'auto' }}*/>
            {
                todosRes.photos ?
                    todosRes.photos.map(todo =>
                    (<div key={todo.id}>
                        <img
                            src={todo.src.large}
                            alt={todo.photographer}
                        />
                    </div>)
                    )
                    : <>Not found</>
            }
            <div ref={childRef} style={{ height: 20, background: 'green' }} />
        </div>
    );

};

export default Request;
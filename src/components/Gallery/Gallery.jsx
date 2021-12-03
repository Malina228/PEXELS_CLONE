import React, { useState, useEffect, useRef } from 'react';
import s from './Gallery.module.css';
import useScroll from "./useScroll";

//const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

const Gallery = () => {

  const [todosRes, setTodosRes] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 6;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

  function fetchTodos(page, limit) {
    fetch(`https://api.pexels.com/v1/search?query=dog&page=${page}&per_page=${limit}`, {
      headers: {
        Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
      }
    })
      .then(response => response.json())
      .then(json => {
        /*setTodosRes(prev => {
          prev ?  prev = [...prev, ...json] : console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        });
        setPage(prev => prev + 1)*/
      })
  }

  /*useEffect(() => {
    fetchTodos(page, limit);
  }, [])*/

  return (
    <div ref={parentRef} className={s.main}>
      <div className={s.mainMenuWrapper}>
        <ul className={s.mainMenu}>
          <li className={s.mainMenuItem}><a href="#" className={s.mainMenuLink}>Home</a></li>
          <li className={s.mainMenuItem}><a href="#" className={s.mainMenuLink}>Discover</a></li>
          <li className={s.mainMenuItem}><a href="#" className={s.mainMenuLink}>Videos</a></li>
          <li className={s.mainMenuItem}><a href="#" className={s.mainMenuLink}>Leaderboard</a></li>
          <li className={s.mainMenuItem}><a href="#" className={s.mainMenuLink}>Challenges</a></li>
        </ul>
      </div>
      <hr />

      <div className={s.gallery}>
        {
          todosRes ?
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

      </div>
      <div ref={childRef} style={{ height: 20, background: 'green' }} />
    </div>

  );
}

export default Gallery;
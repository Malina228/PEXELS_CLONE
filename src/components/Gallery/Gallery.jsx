import React, {useState, useEffect } from 'react';
import s from './Gallery.module.css';

//const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

const Gallery = () => {

  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("https://api.pexels.com/v1/curated?query=dog&page=1&per_page=10", {
      headers: {
        Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
      }
    })
      .then(response => response.json())
      .then(json => setTodos(json))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className={s.main}>
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
        {todos.photos.map(todo =>
          <div key={todo.id}>
            {todo}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
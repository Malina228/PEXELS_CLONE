import React from 'react';
import axios from 'axios';
import s from './Gallery.module.css';

//const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

const Gallery = () => {

    //axios.get("https://api.pexels.com/v1/search?query=people").then(response => {return response.json})

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
        
      </div>


    </div>
  );
}

export default Gallery;
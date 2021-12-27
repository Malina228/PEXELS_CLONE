import s from './Header.module.css';
import Suggestion from './Suggestion/Suggestion';
import React, { useState, useEffect, useRef } from 'react';
import Request from "./../Gallery/Request";

const Header = (props) => {

  let newSearchElement = React.createRef();

  let searchTopic = () => {
    props.searchTopic();
  }

  let updateTopic = () => {
    let text = newSearchElement.current.value;
    props.updateTopic(text);
    debugger;
  }

  

  return (

    <div className={s.header}>
      <div className={s.header__image}>
        <img src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&bri=-5&crop=focalpoint&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=10&w=2000" alt="header cover" />
      </div>

      <div className={s.headerWrapper}>
        <div className={s.fullLogo}>
          <div className={s.logo}>
            <img href="#" src="https://www.drupal.org/files/project-images/pexels_logo_0.png" alt="logo"></img>
          </div>
          <div className={s.logo__name}>
            Pexels
          </div>
        </div>
        <div>
          <ul className={s.headerList}>
            <li className={s.headerItem}><a href="#" className={s.headerLink}>Explore</a></li>
            <li className={s.headerItem}><a href="#" className={s.headerLink}>License</a></li>
            <li className={s.headerItem}><a href="#" className={s.headerLink}>Upload</a></li>
            <li className={s.headerItem}><a href="#" className={s.headerLink}>•••</a></li>
            <li className={s.headerItem}><a href="#" className={s.headerLink}>Join</a></li>
          </ul>
        </div>
      </div>

      <div className={s.searchForm}>
        <div className={s.formText}>The best free stock photos, royalty<br /> free images & videos shared by<br /> creators.</div>
        <table className={s.elemContainer}>
          <tr>
            <td>
              <form className={s.searchF}>
                <input className={s.search} type="text" value={props.newSearchText.newSearchText} onChange={updateTopic} ref={newSearchElement} placeholder="Search for free photos and videos" />
              </form>
            </td>
            <td><button onClick={searchTopic}><a href="#"><img src="https://static.thenounproject.com/png/105498-200.png"></img></a></button></td>
          </tr>
        </table>
        <div>
          <ul className={s.suggestionsList}>
            <li className={s.suggestion}>Suggested:</li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={","} /></li>
            <li><Suggestion sug={props.suggestions.suggestions} afterWord={""} /></li>
          </ul>
        </div>
      </div>




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
          <Request />
        </div>
      </div>


    </div>
  );
}

export default Header;

//export default connect(mapStateToProps)(Header);
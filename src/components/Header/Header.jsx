import React from 'react';
import s from './Header.module.css';

const Header = (props) => {

  let state = props.suggestions;
  //let sug = state.zalupa.map(s => {return s.name});
  let sug = "";
  (state.initialState === undefined) ?
    alert("error") :
    (sug = [state.initialState.zalupa].map(s => { return s.name }));

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
            Pexels{sug}
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
                <input className={s.search} type="text" placeholder="Search for free photos and videos" />
              </form>
            </td>
            <td><a href="#"><img src="https://static.thenounproject.com/png/105498-200.png"></img></a></td>
          </tr>
        </table>
        <div>
          <ul className={s.suggestionsList}>
            <li className={s.suggestion}>Suggested:</li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>forest,{props}</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>brooklyn,</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>nature,</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>flowers,</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>sea,</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>city,</a></li>
            <li className={s.suggestion}><a href="#" className={s.suggestionLink}>more</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Header;
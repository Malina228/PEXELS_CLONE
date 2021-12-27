import React from 'react';
import s from './../Header.module.css';

const Suggestion = (props) => {

    let sugArrSize = 39;
    let randomSug = Math.floor(Math.random()*sugArrSize);
    return <a href="#" className={s.suggestionLink}>{props.sug[randomSug]} {props.afterWord}</a>
}

export default Suggestion;
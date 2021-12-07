import React from 'react';
import s from './../Header.module.css';


const Suggestion = (props) => {

    let sugArrSize = 39;
    let randomSug = Math.floor(Math.random()*sugArrSize);
    //let sugg = props.sug.map(s => {return s});
    //console.log(props.sug);

    return <a href="#" className={s.suggestionLink}>{props.sug}</a>
}

export default Suggestion;
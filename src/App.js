import React from 'react';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer /* state={props.store}  *//>
      {/*<Gallery />*/}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Apis from './components/Apis';

const App = () => {
    return(
  <div>
      <Apis />
  </div>
    );
}
ReactDOM.render(<App />,document.querySelector('#root'));
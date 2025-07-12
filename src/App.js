import React from 'react';

import './index.css';
import './styles/design.css';
import Clock from './Clock';
import './styles/clock.css';
// import Dates from './Date';
import Owner from './Owner';
import Experience from './Experience';


function App() {
  
  
  return (
    <body className="spectrumBackground stage">
      <div className="row">
        <Clock></Clock>

      </div>
      <div>
        <Owner></Owner>
        <Experience></Experience>
      </div>

    </body>
  );
}

export default App;

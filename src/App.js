import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [investors, setInvestors] = useState([])

  useEffect(() => {
    fetch('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
      .then(resp => resp.json())
      .then(data => {
        data.speakers.map(x=>{
          console.log(x.company)
        })

        setInvestors(data)
      })
  }, [])
  return (
    <div className="main">
      <h1>TEST</h1>
    </div>
  );
}

export default App;

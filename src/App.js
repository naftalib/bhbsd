import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from './COMPONENTS/Icon'

function App() {

  // ------------------state elements---------------------

  const [investors, setInvestors] = useState([])
  const [windowLength, setWindowLength] = useState(0)
  const [invProfile, setInvProfile] = useState({})
  const [modal, setModal] = useState (false)

  useEffect(() => {
    fetch('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
      .then(resp => resp.json())
      .then(data => {
          setInvestors(data.speakers.slice(0,30))  
      })
  }, [])

  useEffect(()=>{
    setWindowLength(window.innerWidth)
  },[])

  // ------------------state elements End---------------------

  // ------------------Modal Controllers---------------------

  const openModal = (e)=>{

    const targetId = Number(e.target.id)
    const filteredInvestor = investors.filter(x=> { 
      return x.id === targetId 
    })
    const {firstname, lastname, company, speaker_head_shot_to_display, bio} = filteredInvestor[0]

    setInvProfile({firstname, lastname, company, speaker_head_shot_to_display, bio})

    setModal(!modal)
  }

  const closeModal = () => {
    setInvProfile({})
    setModal(!modal)
  }

  return (
    <div className="App">
      <h1>MEET OUR 30 FEATURED INVESTORS</h1>
      {/* ---------------------Modal elements----------------------- */}
      <div className={modal?"openModal":"closeModal"}>
        <div className={modal?"openModalContent":"closeModal"}>
          <h3>{invProfile.firstname +" "+ invProfile.lastname}</h3>
          <h3>{invProfile.company}</h3>
          <img src={invProfile.speaker_head_shot_to_display} alt="img" />
          <p>{invProfile.bio}</p>
          <button className='closeBtn' onClick={closeModal}>CLOSE</button>
        </div>
      </div>
      {/* ---------------------Modal elements End----------------------- */}
     
     {/* ---------------------Icon Component----------------------- */}
      <div className={ windowLength < 600 ? "grid-2": "grid-5" }>
         {investors.map(inv=>
          <Icon 
            key={inv.id}
            inv={inv}
            company={inv.company}
            click={openModal}
          />)}
      </div>
    </div>
  );
}

export default App
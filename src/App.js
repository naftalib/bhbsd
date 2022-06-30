import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from './COMPONENTS/Icon'
import Modal from './COMPONENTS/Modal'

function App() {

  // ------------------state elements---------------------

  const [investors, setInvestors] = useState([])
  const [windowLength, setWindowLength] = useState(0)
  const [invProfile, setInvProfile] = useState({})
  const [modal, setModal] = useState (false)

  ///API call

  useEffect(() => {
    fetch('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
      .then(resp => resp.json())
      .then(data => {
          setInvestors(data.speakers.slice(0,30))  
      })
  }, [])

  //VP detection for mobile responsiveness (see - https://stackoverflow.com/questions/68732392/window-width-in-react )

  useEffect(()=>{
    function handleResize() {
      setWindowLength(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  },[setWindowLength])


  // ------------------Modal Controllers---------------------

  //open
  const openModal = (e)=>{

    const targetId = Number(e.target.id)
    const filteredInvestor = investors.filter(x=> { 
      return x.id === targetId 
    })
    const {firstname, lastname, company, speaker_head_shot_to_display, bio} = filteredInvestor[0]

    setInvProfile({firstname, lastname, company, speaker_head_shot_to_display, bio})

    setModal(!modal)
  }
  //close
  const closeModal = () => {
    
    setInvProfile({})
    setModal(!modal)
  }

  return (
    <div className="App">
      <h1>MEET OUR 30 FEATURED INVESTORS</h1>
      {/* ---------------------Modal element----------------------- */}
      <Modal 
        modal={modal}
        data={invProfile}
        click={closeModal}
      />
     {/* ---------------------Icon Component----------------------- */}
      <div className={ windowLength < 700 ? "grid-2": "grid-5" }>
         {investors.map(inv=>
          <Icon 
            key={inv.id}
            inv={inv}
            click={openModal}
          />)}
      </div>
    </div>
  );
}

export default App
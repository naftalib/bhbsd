const Modal = ( { modal, data, click } )=>{


    const fullName = `${data.firstname}  ${data.lastname}`

    return (

      <div className={modal?"openModal":"closeModal"}>
          <div className={modal?"openModalContent":"closeModal"}>
            <h3>{fullName}</h3>
            <h3>{data.company}</h3>
            <img src={data.speaker_head_shot_to_display} alt="img" />
            <p>{data.bio}</p>
            <button className='closeBtn' onClick={click}>CLOSE</button>
          </div>
      </div>

    )
  }
  
  export default Modal
const Modal = ( { data } )=>{


    const fullName = `${data.firstname}  ${data.lastname}`

    return (
  
        <div className="modal-content">
          <h3>{fullName}</h3>
          <h4>{data.company}</h4>
          <img src={data.speaker_head_shot_to_display} alt="Speaker img"/>
          <p>{data.bio}</p>
        </div>

    )
  }
  
  export default Modal
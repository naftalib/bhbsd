const Icon = ( { inv,click } )=>{

    const fullName = `${inv.firstname} ${inv.lastname}`
    const company = inv.company
    return (
  
     <div className='icon'>
        <img src={inv.speaker_head_shot_to_display} 
        id={inv.id}
        onClick={click}
        alt="Speaker img"
        />
        <h3>{fullName}</h3>
        <h4>{inv.company}</h4>
    </div>
    
    )
  }
  
  export default Icon
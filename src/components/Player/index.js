import './style.css'

const Player = ({ name, img, role, bgColor}) => {
   return (
      <div className='player'>
         <div className='cabecalho' style={{ backgroundColor: bgColor }}>
            <img src={img} alt={name}></img>
         </div>
         <div className='rodape'>
            <h4>{name}</h4>
            <h5>{role}</h5>
         </div>
      </div>
   )
}

export default Player
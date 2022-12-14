import './style.css'

const Player = (props) => {
   return (
      <div className='player'>
         <div className='cabecalho'>
            <img src={props.img} alt={props.name}></img>
         </div>
         <div className='rodape'>
            <h4>{props.name}</h4>
            <h5>{props.role}</h5>
         </div>
      </div>
   )
}

export default Player
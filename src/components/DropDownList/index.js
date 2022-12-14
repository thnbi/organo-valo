import './style.css'

const DropDownList = (props) => {
    return (
      <div className='drop-list'>
         <label>{props.label}</label>
         <select required={props.required} value={props.value} onChange={(event) => props.onInput(event.target.value)}>
         <option value=""></option>
            {props.itens.map((option) => {
               return <option key={option}>{option}</option>
            })}
         </select>
      </div>
    )
}

export default DropDownList
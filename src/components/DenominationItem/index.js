import './index.css'

const DenominationItem = props => {
  const {list, deleteNumber} = props
  const {value} = list
  const deleteNum = () => {
    deleteNumber(value)
  }

  return (
    <li className="li">
      <button type="button" className="button" onClick={deleteNum}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

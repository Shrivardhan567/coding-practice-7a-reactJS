// Write your code here
const DenominationItem = props => {
  const {numDetails, denominateRupee} = props
  const {rupee, id} = numDetails
  const onClickDenomination = () => {
    denominateRupee(id)
  }

  return (
    <li>
      <button onClick={onClickDenomination} type="button">
        {rupee}
      </button>
    </li>
  )
}

export default DenominationItem

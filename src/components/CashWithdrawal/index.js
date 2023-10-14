// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

const Amount = [
  {
    id: 1,
    rupee: 50,
  },
  {
    id: 2,
    rupee: 100,
  },
  {
    id: 3,
    rupee: 200,
  },
  {
    id: 4,
    rupee: 500,
  },
]

class CashWithdrawal extends Component {
  state = {amount: Amount, balance: 2000}

  denominateRupee = id => {
    const {amount} = this.state
    const denominationAmount = amount.filter(num => id === num.id)
    console.log(denominationAmount)
    this.setState(prevState => ({
      balance: prevState.balance - denominationAmount[0].rupee,
    }))
  }

  render() {
    const {amount, balance} = this.state

    return (
      <div>
        <div>
          <h1>S</h1> <h1>Sarah Williams</h1>
        </div>
        <div>
          <p>Your Balance</p>
          <div>
            <p>{balance}</p>
            <p>In Rupees</p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {amount.map(eachNum => (
              <DenominationItem
                numDetails={eachNum}
                key={eachNum.id}
                denominateRupee={this.denominateRupee}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

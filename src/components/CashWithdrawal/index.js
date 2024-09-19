import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  deleteNumber = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-flex">
            <h1 className="profile">S</h1>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-flex">
            <p className="balance-name">your balance</p>
            <div>
              <p className="balance">{count}</p>
              <p className="rupees">in rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sumInRupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-element">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                list={eachItem}
                deleteNumber={this.deleteNumber}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

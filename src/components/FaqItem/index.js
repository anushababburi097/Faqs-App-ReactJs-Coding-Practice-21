// Write your code here.
import './index.css'
import {Component} from 'react'

const plusImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onClickPlusOrMinusBtn = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const activeImage = isActive ? minusImgUrl : plusImgUrl
    const altImg = isActive ? 'minus' : 'plus'
    return (
      <button
        type="button"
        className="btn"
        onClick={this.onClickPlusOrMinusBtn}
      >
        <img src={activeImage} alt={altImg} />
      </button>
    )
  }

  renderAnswers = () => {
    const {isActive} = this.state
    const {listItemDetails} = this.props
    const {answerText} = listItemDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {listItemDetails} = this.props
    const {questionText} = listItemDetails
    return (
      <li className="faqs-list-items">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswers()}
      </li>
    )
  }
}

export default FaqItem

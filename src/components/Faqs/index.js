// Write your code here.

import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-content-list">
          {faqsList.map(eachList => (
            <FaqItem key={eachList.id} listItemDetails={eachList} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs

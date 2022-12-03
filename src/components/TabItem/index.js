// Write your code here

import './index.css'

const TabItem = props => {
  const {TabDetails, UpdatedTabId, isActive} = props
  const {tabId, displayText} = TabDetails

  const ClickTabId = () => {
    UpdatedTabId(tabId)
  }

  const activeTabBtn = isActive ? 'active-btn' : ''

  return (
    <li className="TabList-Item">
      <button
        className={`tab-btn ${activeTabBtn}`}
        type="button"
        onClick={ClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

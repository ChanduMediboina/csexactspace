import './index.css'

const SideNavBarTabs = props => {
  const {getTab, selectTab, isActiveTab} = props
  const {tabName} = getTab

  return (
    <li
      onClick={() => selectTab(tabName)}
      className={`tabs-container ${isActiveTab && 'activeTabBg'}`}
    >
      <span
        className={`hash-symbol ${isActiveTab && 'active-tab-hash-symbol'}`}
      >
        #
      </span>
      <p
        className={`side-tab-name ${isActiveTab && 'active-tab-side-tab-name'}`}
      >
        {tabName}
      </p>
    </li>
  )
}
export default SideNavBarTabs

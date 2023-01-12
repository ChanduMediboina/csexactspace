import {useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import SideNavBarTabs from '../SideNavBarTabs'
import CreateContext from '../../CreateContext'
import './index.css'

const allSideNavTabs = [
  {id: 1, tabName: 'Poland Office'},
  {id: 2, tabName: 'Introductions'},
  {id: 3, tabName: 'India Office'},
]

const SideNavBar = () => {
  const [tabId, setTabId] = useState('Introductions')

  return (
    <CreateContext.Consumer>
      {value => {
        const {getChannelName} = value
        //when user clicks on tab it will be triggered
        const selectTab = tabName => {
          setTabId(tabName)
          getChannelName(tabName)
        }

        return (
          <div className="side-nav-container">
            <div className="nav-profile-container">
              <div className="profile">
                <span className="profile-name">RR</span>
                <span className="online-dot">c</span>
              </div>
              <div>
                <h4>Rolande Raimondi</h4>
                <p className="designation">Research Nurse</p>
              </div>
            </div>
            <div className="conversation-container">
              <div className="plus-icon-conversation">
                <h3>Conversations</h3>
                <AiOutlinePlusCircle className="plus-icon" />
              </div>
              {allSideNavTabs.map(item => (
                <SideNavBarTabs
                  isActiveTab={tabId === item.tabName}
                  key={item.id}
                  selectTab={selectTab}
                  getTab={item}
                />
              ))}
            </div>
          </div>
        )
      }}
    </CreateContext.Consumer>
  )
}
export default SideNavBar

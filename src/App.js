import {useState, useEffect} from 'react'

import ChatPage from './components/ChatPage'

import SideNavBar from './components/SideNavBar'

import CreateContext from './CreateContext'

import './App.css'

const App = () => {
  const [messagesData, setMessages] = useState([])
  const [channel, setChannel] = useState('Introductions')
  const [messagesCount, setMessagesCount] = useState(0)

  useEffect(() => {
    //messages count functionality
    let count = 0
    messagesData.map(each => {
      if (each.channel === channel) {
        count += 1
      }
      return null
    })
    setMessagesCount(count)
  })

  //get and save the new message to Array
  const setMessagesData = message => {
    setMessages(prevState => [...prevState, message])
  }

 // delete a message by using filter method
  const getDeleteId = id => {
    setMessages(messagesData.filter(item => item.id !== id))
  }

  //toggle the like button
  const getLike = id => {
    const update = messagesData.map(each => {
      if (each.id === id) {
        return {...each, likeBtn: !each.likeBtn, unLike: false}
      }
      return each
    })
    setMessages(update)
  }

  //Toggle the unlike button
  const getUnLike = id => {
    const update = messagesData.map(each => {
      if (each.id === id) {
        return {...each, likeBtn: false, unLike: !each.unLike}
      }
      return each
    })
    setMessages(update)
  }
//side navbar tab changes function
  const getChannelName = tabName => {
    setChannel(tabName)
  }

  return (
    //context
    <CreateContext.Provider
      value={{
        messagesData,
        setMessagesData,
        getDeleteId,
        getLike,
        getUnLike,
        getChannelName,
        channel,
        messagesCount,
      }}
    >
      <div className="all-component-container">
        <SideNavBar />
        <ChatPage />
      </div>
    </CreateContext.Provider>
  )
}
export default App

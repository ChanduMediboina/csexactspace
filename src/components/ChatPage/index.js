import {IoIosContacts} from 'react-icons/io'

import UserInput from '../InputAndEmoji'

import CreateContext from '../../CreateContext'

import MessageItem from '../MessagesItem'

import './index.css'

const ChatPage = () => (
  <CreateContext.Consumer>
    {value => {
      const {messagesData, messagesCount, channel} = value
      return (
        <div className="chat-container">
          <div className="channel-type-information">
            <div>
              <h2 className="introduction-heading">{channel}</h2>
              <p className="type-of-chat">
                This Channel Is For Company Wide Chatter
              </p>
            </div>

            <p className="group-size">
              {messagesCount}|100
              <IoIosContacts className="contact-icon" />
            </p>
          </div>
          <hr />
          <div className="chat-content-container">
            {messagesData.map(each => {
              if (channel === each.channel) {
                return <MessageItem key={each.id} getMessage={each} />
              }
              return ''
            })}
          </div>
          <UserInput />
        </div>
      )
    }}
  </CreateContext.Consumer>
)

export default ChatPage

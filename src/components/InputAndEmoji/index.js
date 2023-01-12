import EmojiPicker from 'emoji-picker-react'

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import Popup from 'reactjs-popup'

import {AiOutlineSend} from 'react-icons/ai'

import {BsEmojiSmile} from 'react-icons/bs'

import CreateContext from '../../CreateContext'

import './index.css'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']
const backgroundColors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

function UserInput() {
  const [message, setInput] = useState('')

  const onEmojiClick = EmojiClickData => {
    setInput(prevInput => prevInput + EmojiClickData.emoji)
  }

  return (
    <CreateContext.Consumer>
      {value => {
        const {setMessagesData, channel} = value

        const onClickSendBtn = () => {
          const randomNumber = Math.ceil(Math.random() * userList.length - 1)
          if (message !== '') {
            const time = new Date()
            const userName = userList[randomNumber]
            const backgroundColor = backgroundColors[randomNumber]
            const messageObj = {
              id: uuidv4(),
              message,
              userName,
              backgroundColor,
              messageTime: `${time.getHours()}:${time.getMinutes()}`,
              likeBtn: false,
              unLike: false,
              channel,
            }
            setMessagesData(messageObj)
            setInput('')
          }
        }

        return (
          <div className="button-input-container">
            <div className="user-input-container">
              <input
                value={message}
                className="input-style"
                onChange={event => setInput(event.target.value)}
              />

              <Popup
                trigger={
                  <button className="emoji-btn" type="button">
                    <BsEmojiSmile className="emoji-icon" />
                  </button>
                }
                modal

                // overlayStyle={{backgroundColor: 'transparent', width: '20vh'}}
              >
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </Popup>
            </div>
            <button onClick={onClickSendBtn} type="button" className="send-btn">
              <AiOutlineSend />
            </button>
          </div>
        )
      }}
    </CreateContext.Consumer>
  )
}
export default UserInput

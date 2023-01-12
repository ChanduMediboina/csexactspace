import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BiLike} from 'react-icons/bi'
import {AiOutlineDislike} from 'react-icons/ai'
import {MdDeleteOutline} from 'react-icons/md'
import CreateContext from '../../CreateContext'
import './index.css'

const MessageItem = props => {
  const {getMessage} = props
  const {
    message,
    id,
    likeBtn,
    backgroundColor,
    messageTime,
    userName,
    unLike,
  } = getMessage

  return (
    <CreateContext.Consumer>
      {value => {
        const {getDeleteId, getLike, getUnLike} = value

        const onClickToDelete = () => {
          getDeleteId(id)
        }

        const onClickLike = () => {
          getLike(id)
        }

        const onClickUnLike = () => {
          getUnLike(id)
        }

        return (
          <li className="list-container">
            <span className={`chat-profile ${backgroundColor}`}>
              {userName[0]}
            </span>
            <span>
              <div className="time-name-container">
                <h5>{userName}</h5>
                <p className="message-time">{messageTime}</p>

                <Popup
                  trigger={
                    <button className="drop-down-btn" type="button">
                      <IoIosArrowDropdown />
                    </button>
                  }
                  position="bottom left"
                  overlayStyle={{backgroundColor: 'transparent'}}
                >
                  <button
                    onClick={onClickToDelete}
                    type="button"
                    className="delete-button-popup"
                  >
                    <MdDeleteOutline className="delete-icon" />
                    Delete
                  </button>
                  <button
                    onClick={onClickLike}
                    type="button"
                    className="delete-button-popup like"
                  >
                    <BiLike className="delete-icon" />
                    Like
                  </button>
                  <button
                    onClick={onClickUnLike}
                    type="button"
                    className="delete-button-popup"
                  >
                    <AiOutlineDislike className="delete-icon" />
                    Dislike
                  </button>
                </Popup>
              </div>
              <p className="message-description">
                {message}
                {likeBtn && (
                  <img
                    src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1673421698/like_button_lrqmrq.png"
                    alt="like"
                    className="like-btn"
                  />
                )}
                {unLike && (
                  <img
                    src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1673429410/Unlike_bd7s6l.png"
                    alt="like"
                    className="like-btn"
                  />
                )}
              </p>
            </span>
          </li>
        )
      }}
    </CreateContext.Consumer>
  )
}
export default MessageItem

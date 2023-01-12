import React from 'react'

//this Component is used to create a react context
const CreateContext = React.createContext({
  messagesData: [],
  setMessagesData: () => {},
  getDeleteId: () => {},
  getLike: () => {},
  getUnLike: () => {},
  channel: '',
  getChannelName: () => {},
  messagesCount: 0,
})

export default CreateContext

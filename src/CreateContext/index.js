import React from 'react'

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

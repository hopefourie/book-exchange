import React from 'react'

let users = [
  {
    id: 1,
    username: 'bookluvr943',
    imageURL: 'https://i.pinimg.com/564x/9c/2c/b3/9c2cb378f152bdc8b15b754e8c4f796f.jpg',
    messages:  [
      {
        id:1,
        content: 'Is this still available?',
      }
    ]
  },
  {
    id: 2,
    username: 'live2read',
    imageURL: 'https://i.pinimg.com/564x/9c/2c/b3/9c2cb378f152bdc8b15b754e8c4f796f.jpg',
    messages:  [
      {
        id:3,
        content: 'Where are you located?',
      },
      {
        id:2,
        content: 'I\'m interested!',
      },
    ]
  },
]

const Inbox = () => (
    <div className="component">
        {users.map(user => {
          return (
            <div key={user.id} className="user-box">
              <img className="user-icon"src={user.imageURL}/>
              <div>
                <h2>{user.username}</h2>
                <p>{user.messages[0].content}</p>
              </div>
            </div>
          )
        })}
    </div>
)

export default Inbox

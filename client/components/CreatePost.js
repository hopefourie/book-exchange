import React, {useState} from 'react'

const CreatePost = (props) => {
  const {posts, setPosts, getPosts, createPost} = props
  const [heading, setHeading] = useState("")
  const [body, setBody] = useState("")

  const handleHeadingChange = (e) => {
    setHeading(e.target.value)
    console.log(heading)
  }
  const handleBodyChange = (e) => {
    setBody(e.target.value)
    console.log(body)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createPost({heading, text: body})
  }
  return (
    <div className="component">
      <form className ="create-post-form">
        <input type="text" value={heading} placeholder="heading..." onChange={handleHeadingChange}></input>
        <input type="text" value={body} placeholder="body..." onChange={handleBodyChange}></input>
        <button type="submit" onClick={handleSubmit}>post</button>
      </form>
    </div>
)
}


export default CreatePost

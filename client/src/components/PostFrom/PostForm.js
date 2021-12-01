import './PostForm.css'


const PostForm = ({state,handleInputChange}) =>{




  return (
    <>
      <form>
        <p>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={state.title}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='body'>body</label>
          <input
            type='text'
            name='body'
            value={state.body}
            onChange={handleInputChange}
          />
        </p>
        <button onClick={handleAddPost}>Add Post</button>
      </form>
      {
        loading ? (
          <span>loading... please wait</span>
        ) : (
          state.posts.map(post => (
            <li>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          ))
        )
      }
    </>
  )
}


export default PostForm
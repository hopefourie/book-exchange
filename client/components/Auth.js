import React, {useState} from 'react'

const Auth = props => {
  const {displayName} = props
  const [state, setState] = useState({
    username:"",
    email: "",
    password: ""
  })

  const signup = async () => {
    try {
      const { data: me } = await axios.put('/auth/signup',{
        username: state.username,
        password: state.password,
        email: state.email
      });
      setMe(me);
    } catch (err) {
      console.error(err.message);
    }
  };

  const login = async () => {
    try {
      const { data: me } = await axios.put('/auth/signup',{
        password: state.password,
        email: state.email
      });
      setMe(me);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
    console.log(state[e.target.name])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (displayName === "Signup") {
      signup()
    } else if (displayName === "Login") {
      login()
    }
  }
  return (
    <div className="component">
      <form className="auth-form">
        {displayName === "Signup" ? (
          <input
          name="username"
          type="text"
          placeholder="Username"
          required="required"
        />
        ) : "" }
        <input
          name="email"
          type="text"
          placeholder="Email"
          required="required"
        />
        <input
          name="password"
          type="password"
          required="required"
          placeholder="Password"
        />
        <button className="auth-button" type="submit">
          {displayName}
        </button>
        <a href="/auth/google">{displayName} with Google</a>
      </form>

    </div>
  )
}

export default Auth

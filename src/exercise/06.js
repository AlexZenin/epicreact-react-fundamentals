// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // function handleSubmit(e) {
    // e.preventDefault()
    // const username = e.target.elements.username.value
    // onSubmitUsername(username)
  // }
// 
  // return (
    // <form onSubmit={handleSubmit}>
      // <div>
        // <label htmlFor="username">Username:</label>
        // <input type="text" id="username" />
      // </div>
      // <button type="submit">Submit</button>
    // </form>
  // )


  /*******************************************
   * Extra 1 -- using refs
   *******************************************/
  
  // const usernameRef = React.useRef()
  // 
  // function handleSubmit(e) {
    // e.preventDefault()
    // const username = usernameRef.current.value
    // onSubmitUsername(username)
  // }
// 
  // return (
    // <form onSubmit={handleSubmit}>
      // <div>
        // <label htmlFor="username">Username:</label>
        // <input type="text" id="username" ref={usernameRef} />
      // </div>
      // <button type="submit">Submit</button>
    // </form>
  // )

  /*******************************************
   * Extra 2 -- validate lower-case
   *******************************************/
    
  // const ERROR_MESSAGE = 'Username must be lower case'
  // 
  // const usernameRef = React.useRef()
  // const [errorMessage, setErrorMessage] = React.useState(null)
  // 
  // function handleSubmit(event) {
    // event.preventDefault()
    // onSubmitUsername(usernameRef.current.value)
  // }
  // 
  // function handleChange(event) {
    // const input = event.target.value
    // const isValid = input === input.toLowerCase()
    // setErrorMessage(isValid ? null : ERROR_MESSAGE) 
  // }
// 
  // return (
    // <form onSubmit={handleSubmit}>
      // <div>
        // <label htmlFor="username">Username:</label>
        // <input type="text" id="username" ref={usernameRef} onChange={handleChange}/>
      // </div>
      // {errorMessage && 
        // <div style={{color: 'red'}} role="alert">{errorMessage}</div>
      // }
      // <button type="submit" disabled={!!errorMessage}>Submit</button>
    // </form>
  // )

  /*******************************************
   * Extra 3 -- control the input value
   *******************************************/
    
  const [username, setUsername] = React.useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }
  
  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} value={username}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )

}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

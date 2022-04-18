// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
const largeBox = <div  className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>
  
/*******************************************
 * Exercise 1 (Extra) -- Custom component
 *******************************************/
  
// function Box(props) {
  // const { className, style, children } = props
  // return (
    // <div className={`box ${className}`} style={{ fontStyle: 'italic', ...style}}>
      // {children}
    // </div>
  // )
// }
// 
// function App() {
  // return (
    // <div>
      // {smallBox}
      // {mediumBox}
      // {largeBox}
      // <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
        // small lightblue box
      // </Box>
    // </div>
  // )
// }
  
/*******************************************
 * Exercise 2 (Extra) -- accept a size prop to encapsulate styling 
 *******************************************/
  
function Box(props) {
  const { size, style, children } = props
  return (
    <div className={`box box--${size}`} style={{ fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App

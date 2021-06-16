import React from 'react';

const App = (props) => {
   return (
      <div>
         <ul>
            <li onClick={() => props.history.push({ pathname: "/home", state: { message: "Hello" } })}>Home</li>
            <li onClick={() => props.history.push('/about')}>About</li>
            <li onClick={() => props.history.push('/contact')}>Contact</li>
         </ul>
         {props.children}
      </div>
   )
}

export default App;
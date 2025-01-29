import React from 'react';
import { useState } from 'react';

function App() {
  const [ message, setMessage ] = useState('Welcome to X Mobile Landing Page');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={ () => setMessage('X Mobile') }>
        Click me
      </button>
    </div>
  );
}

export default App;

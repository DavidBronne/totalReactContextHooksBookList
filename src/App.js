import React from 'react'
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <h1>App</h1>
        <Navbar/>
      </BookContextProvider>
    </div>
  );
}

export default App;

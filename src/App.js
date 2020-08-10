import React, { useState } from 'react';
import findEmails from './app/main';
import './App.css';

function App() {

  const [ username, setUsername ] = useState("");
  const [ emails, setEmails ] = useState([]);

  const clearData = () => {
    setEmails([])
    setUsername("");
  }

  const findGithubEmail = (email) => {
    if (email === "") {
      clearData()
      alert("Please enter an username") 
      return
    }
    findEmails(email).then(res => {
      if (res.length === 0) {
        clearData()
        alert("User not found")
      }
      else setEmails([...res])
    })
  }
 
  return (
    <div className="App">
      <header className="App-space">
        <h1>Github Mail
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </h1>
        <div className="input-main">
          <input 
            type="text" 
            placeholder="Enter Github Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? findGithubEmail(e.target.value) : null}
            className="input-container"
            />
            <button onClick={() => findGithubEmail(username)} className="cta-btn"> Get Emails</button>
        </div>
        {
          emails.length !== 0 ?
          <ul>
            {
              emails.map(email => <a href={`mailto:${email}`}><li key={email} className="mailList" >{email}</li></a>)
            }
          </ul> :
          null
        }
      </header>
    </div>
  );
}

export default App;

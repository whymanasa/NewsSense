import React from 'react';
import '../styles/HomePage.css';

function home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>🧠 NewsSense</h1>
        <p>Your smart assistant to explain why your fund is down</p>
      </header>

      <main className="main-section">
        <label htmlFor="fundSelect">Select a Fund:</label>
        <select id="fundSelect" className="dropdown">
          <option value="QQQ">QQaQ</option>
          <option value="VTI">VTI</option>
        </select>

        <input
          type="text"
          placeholder="Ask me why your fund dropped..."
          className="question-input"
        />

        <button className="submit-button">Find Out</button>

        <div className="response-box">
          <p>🤖 Your answer will appear here.</p>
        </div>
      </main>
    </div>
  );
}

export default home;


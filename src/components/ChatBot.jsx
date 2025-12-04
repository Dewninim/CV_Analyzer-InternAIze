import React, { useState } from 'react';
import './ChatBot.css';  // Make sure the CSS file exists

const ChatBot = () => {
  const [open, setOpen] = useState(false);          // Toggle chat window
  const [messages, setMessages] = useState([]);     // Conversation history
  const [input, setInput] = useState('');           // User input
  const [typing, setTyping] = useState(false);      // Typing indicator
  const [industry, setIndustry] = useState('');     // Selected industry
  const [field, setField] = useState('');           // Selected field

  // Toggle chat window visibility
  const handleToggle = () => {
    setOpen(!open);
    if (!open) handleStart();
  };

  // Start conversation
  const handleStart = () => {
    setMessages([{ from: 'bot', text: 'Hello! How can I assist you today?' }]);
  };

  // Industry selection
  const handleIndustryChange = (e) => {
    const selected = e.target.value;
    setIndustry(selected);
    setMessages(prev => [
      ...prev,
      { from: 'user', text: selected },
      { from: 'bot', text: 'Choose your field:' }
    ]);
  };

  // Field selection
  const handleFieldChange = (e) => {
    const selected = e.target.value;
    setField(selected);

    let prompt = '';
    if (industry === 'IT' && selected === 'Software Engineering') {
      prompt = 'You should improve your knowledge in algorithms, data structures, and system design.';
    } else if (industry === 'Finance' && selected === 'Investment Banking') {
      prompt = 'Learn about financial markets, valuation methods, and corporate finance.';
    } else {
      prompt = 'Qualification details coming soon...';
    }

    setMessages(prev => [
      ...prev,
      { from: 'user', text: selected },
      { from: 'bot', text: prompt }
    ]);
  };

  // Send message to backend
  const handleSend = async () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
    setTyping(true);

    try {
      const response = await fetch('http://localhost:5001/get', {  // <-- backend URL with custom port
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
    } catch (err) {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: '⚠ Error connecting to backend' }]);
    }
  };

  return (
    <>
      {/* Chatbot toggle icon */}
      <div className="chatbot-icon" onClick={handleToggle}>
        💬
      </div>

      {/* Chatbot box */}
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.from}`}>{msg.text}</div>
            ))}
            {typing && <div className="chat-msg bot">Bot is typing...</div>}
          </div>

          {/* Input field */}
          <div className="chatbot-input-section">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-button" onClick={handleSend}>
              ➤
            </button>
          </div>

          {/* Industry selection */}
          {messages.length === 1 && (
            <select onChange={handleIndustryChange} value={industry}>
              <option value="">-- Select Industry --</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          )}

          {/* Field selection */}
          {industry && (
            <select onChange={handleFieldChange} value={field}>
              <option value="">-- Select Field --</option>
              {industry === 'IT' && (
                <>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </>
              )}
              {industry === 'Finance' && (
                <>
                  <option value="Investment Banking">Investment Banking</option>
                  <option value="Financial Analysis">Financial Analysis</option>
                </>
              )}
              {industry === 'Healthcare' && (
                <>
                  <option value="Nursing">Nursing</option>
                  <option value="Medical Research">Medical Research</option>
                </>
              )}
            </select>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;

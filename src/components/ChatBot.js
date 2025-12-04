// ...existing code...
import React, { useState } from 'react';
import './ChatBot.css';  // Make sure this is correct

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [industry, setIndustry] = useState('');
  const [field, setField] = useState('');
  
  // Toggle chat visibility
  const handleToggle = () => {
    setOpen(!open);
    if (!open) handleStart();
  };
  
  // Start conversation
  const handleStart = () => {
    setMessages([{ from: 'bot', text: 'Hello! How can I assist you today?' }]);
  };

  // Handle industry change
  const handleIndustryChange = (e) => {
    const selected = e.target.value;
    setIndustry(selected);
    setMessages(prev => [
      ...prev,
      { from: 'user', text: selected },
      { from: 'bot', text: 'Choose your field:' }
    ]);
  };

  // Handle field change based on industry
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

    // Combine updates to avoid race conditions
    setMessages(prev => [
      ...prev,
      { from: 'user', text: selected },
      { from: 'bot', text: prompt }
    ]);
  };

  // Handle sending the message
  const handleSend = async () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
    setTyping(true);

    // Simulate a backend response
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: 'This is a simulated response.' }]);
    }, 1000);
  };

  return (
    <>
      <div className="chatbot-icon" onClick={handleToggle}>💬</div>
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.from}`}>{msg.text}</div>
            ))}
            {typing && <div className="chat-msg bot">Bot is typing...</div>}
          </div>
          
          {/* Controls: industry / field selects */}
          <div style={{ padding: '0 10px 10px' }}>
            <select value={industry} onChange={handleIndustryChange}>
              <option value="">Select industry</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
            </select>

            {industry && (
              <select value={field} onChange={handleFieldChange} style={{ marginLeft: 8 }}>
                <option value="">Select field</option>
                {industry === 'IT' && <>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Data Science">Data Science</option>
                </>}
                {industry === 'Finance' && <>
                  <option value="Investment Banking">Investment Banking</option>
                  <option value="Accounting">Accounting</option>
                </>}
              </select>
            )}
          </div>

          {/* Input Fields */}
          <div className="chatbot-input-section">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-button" onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
// ...existing code..
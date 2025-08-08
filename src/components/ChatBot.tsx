import { useState, useEffect, useRef } from 'react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: 'שלום! אני AI Assistant של עומרי. איך אני יכול לעזור לך?', isBot: true }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const botResponses = [
    'זה נשמע מעניין! עומרי מתמחה בטכנולוגיות מתקדמות.',
    'עומרי הוא מפתח מוכשר עם ניסיון רב בפרויקטים מורכבים.',
    'אני ממליץ ליצור קשר ישירות עם עומרי לפרטים נוספים.',
    'עומרי מתמחה ב-React, TypeScript, Node.js ועוד טכנולוגיות מתקדמות.',
    'הפרויקטים של עומרי מדגימים יכולות טכניות גבוהות ויצירתיות.'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { id: Date.now(), text: inputValue, isBot: false }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // סימולציית תגובה של הבוט
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botMessage = { id: Date.now() + 1, text: randomResponse, isBot: true }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Bot Button */}
      <div className={`chat-bot-button ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bot-icon">
          <span>🤖</span>
          {!isOpen && <div className="pulse-dot"></div>}
        </div>
        <span className="bot-label">AI Assistant</span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>AI Assistant של עומרי</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chat-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="כתוב הודעה..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="send-btn"
            >
              <span>📤</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot

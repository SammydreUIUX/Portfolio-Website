'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Samuel's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! I'm here to help you learn more about Samuel's work and services.",
      "Hi there! Feel free to ask me anything about Samuel's portfolio or projects.",
      "Welcome! I can help you with information about Samuel's design and development work."
    ],
    services: [
      "Samuel offers product design, UX/UI design, and fullstack development services. He specializes in creating inclusive, impactful digital experiences.",
      "Samuel provides end-to-end design and development solutions, from user research to implementation. His expertise includes mobile apps, web applications, and digital experiences.",
      "Samuel's services include product design, user experience design, and fullstack engineering. He focuses on creating user-centered solutions that solve real problems."
    ],
    projects: [
      "Samuel has worked on various projects including ZoneAid (emergency app redesign), Starling Hospitality (hotel booking app), and Airtel (research and digital experience design).",
      "Some of Samuel's notable projects include mobile app designs, e-commerce platforms, and research-driven digital experiences. You can view detailed case studies on the projects page.",
      "Samuel's portfolio includes emergency apps, hospitality platforms, and telecommunications projects. Each project demonstrates his approach to user-centered design."
    ],
    contact: [
      "You can reach Samuel through LinkedIn or email. He's currently available for new projects and would love to discuss your ideas!",
      "Samuel is available for collaborations and new opportunities. You can connect with him on LinkedIn or send him an email to start a conversation.",
      "To get in touch with Samuel, you can use the contact form on this site, connect on LinkedIn, or send him an email directly."
    ],
    pricing: [
      "Samuel's rates vary depending on project scope and requirements. He offers competitive pricing for quality work and is happy to discuss project budgets.",
      "Pricing is project-specific and depends on complexity, timeline, and deliverables. Samuel provides detailed proposals for each project opportunity.",
      "Samuel offers flexible pricing based on project needs. He's happy to discuss your budget and find a solution that works for both parties."
    ],
    default: [
      "That's an interesting question! Samuel would be happy to discuss this in detail. You can reach out to him directly for more specific information.",
      "I'd recommend connecting with Samuel directly for detailed information about that. He's always happy to have conversations about his work and approach.",
      "That's a great question! Samuel would love to discuss this with you. Feel free to reach out to him for a more detailed conversation."
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Samuel&apos;s AI Assistant</h3>
                <p className="text-gray-400 text-xs">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

// Mini Chat Component
const MiniChat = ({ mentorName, isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'mentor', text: `Hello! I'm ${mentorName}. How can I help you today?`, time: '10:30 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'user',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate mentor response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'mentor',
          text: 'Thanks for your message! This is a demo chat. I will get back to you soon.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border-2 border-brand-200 rounded-lg shadow-xl z-50">
      {/* Chat Header */}
      <div className="bg-brand-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            👨‍🏫
          </div>
          <div>
            <div className="font-medium text-sm">{mentorName}</div>
            <div className="text-xs opacity-75">Online</div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1"
        >
          ✕
        </button>
      </div>

      {/* Chat Messages */}
      <div className="h-64 overflow-y-auto p-3 space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div>{message.text}</div>
              <div className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-brand-100' : 'text-gray-500'
              }`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={sendMessage} className="p-3 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-brand-500"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default function MentorPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics",
      experience: "15 years exp",
      avatar: "👨‍💻",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      name: "Prof. Priya Sharma",
      subject: "Science",
      experience: "12 years exp",
      avatar: "👩‍🔬",
      bgColor: "bg-green-100"
    }
  ];

  const openChat = (mentor) => {
    setSelectedMentor(mentor);
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
    setSelectedMentor(null);
  };

  return (
    <ProtectedRoute featureName="Mentor Access">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🧑‍🏫</div>
              <h1 className="text-3xl font-bold">Mentor Access</h1>
              <p className="text-gray-600 mt-2">Connect with experienced mentors to guide your learning journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-3">Find Your Mentor</h3>
                <div className="space-y-3">
                  {mentors.map((mentor) => (
                    <div key={mentor.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className={`w-10 h-10 ${mentor.bgColor} rounded-full flex items-center justify-center`}>
                        {mentor.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{mentor.name}</div>
                        <div className="text-sm text-gray-600">{mentor.subject} • {mentor.experience}</div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => openChat(mentor)}
                          className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                          title="Start Chat"
                        >
                          💬 Chat
                        </button>
                        <button className="px-3 py-1 bg-brand-600 text-white rounded text-sm hover:bg-brand-700">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-3">Mentorship Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Active Mentors</span>
                    <span className="font-semibold">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students Mentored</span>
                    <span className="font-semibold">2,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Response Time</span>
                    <span className="font-semibold">2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">Ready to Start?</h3>
              <p className="text-gray-600 mb-4">Get personalized guidance from industry experts</p>
              <button className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
                Request a Mentor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Mini Chat Component */}
      {selectedMentor && (
        <MiniChat 
          mentorName={selectedMentor.name}
          isOpen={chatOpen}
          onClose={closeChat}
        />
      )}
    </ProtectedRoute>
  );
}
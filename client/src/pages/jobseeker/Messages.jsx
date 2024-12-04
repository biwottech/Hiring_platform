import React, { useState } from "react";

const messages = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Frontend Developer",
    content: "Looking forward to our technical interview!",
    status: "Accepted",
    date: "2024-01-15 10:30 AM",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Engineer",
    content: "Thank you for considering my application",
    status: "Pending",
    date: "2024-01-13 3:45 PM",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "UX Designer",
    content: "Can we schedule a portfolio review?",
    status: "Accepted",
    date: "2024-01-13 2:15 PM",
  },
  {
    id: 4,
    name: "David Kim",
    title: "DevOps Engineer",
    content: "Available for technical discussion this week",
    status: "Accepted",
    date: "2024-01-12 11:20 AM",
  },
];

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div className="  mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">Messages</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            + New Request
          </button>
        </div>

        <div className="flex">
          {/* Message List */}
          <div className="w-1/3 border-r p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 mb-4 cursor-pointer ${
                  selectedMessage && selectedMessage.id === message.id
                    ? "bg-blue-100"
                    : "bg-white"
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{message.name}</h3>
                    <p className="text-sm text-gray-500">{message.title}</p>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div
                    className={`text-${
                      message.status === "Accepted" ? "green" : "yellow"
                    }-500`}
                  >
                    {message.status}
                  </div>
                </div>
                <p className="text-sm text-gray-400">{message.date}</p>
              </div>
            ))}
          </div>

          {/* Message Content */}
          <div className="w-2/3 p-4">
            {selectedMessage ? (
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {selectedMessage.name}
                </h3>
                <p className="text-lg text-gray-500 mb-4">
                  {selectedMessage.title}
                </p>
                <p className="text-gray-700 mb-4">{selectedMessage.content}</p>
                <p className="text-sm text-gray-400">{selectedMessage.date}</p>
              </div>
            ) : (
              <p className="text-gray-500">Select a message to read</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

import React, { useState } from "react";
import Header from "../components/Header";
import ButtonComponent from "../ui/ButtonComponent";
import { styles } from "../interfaces/interface";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // State to hold the user's message input
  const [message, setMessage] = useState("");

  // Handle send button click: show toast and clear input if not empty
  const handleSend = () => {
    if (message.trim().length > 0) {
      toast.success(`Message sent: ${message}`);
      setMessage("");
    } else {
      toast.error("Please write your message in the field.");
    }
  };

  return (
    <Header>
      <div className="flex flex-col items-center w-full z-10">
        {/* Label for the textarea */}
        <label
          htmlFor="contact-message"
          className="text-white text-lg mb-2 font-semibold"
        >
          Send us a message
        </label>
        {/* Textarea for user to type their message */}
        <textarea
          id="contact-message"
          className="w-full max-w-md rounded-lg p-2 bg-white/10 text-white border-none mb-4 resize-none"
          rows={5}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* Send button triggers handleSend */}
        <ButtonComponent
          color="bg-blue-600"
          className={`${styles.submit} px-6 py-2 rounded-lg`}
          onClick={handleSend}
        >
          Send
        </ButtonComponent>
        {/* Toast notifications for feedback */}
        <Toaster />
      </div>
    </Header>
  );
};

export default Contact;
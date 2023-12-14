import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/db";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, seEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const addMessage = async (name, email, message) => {
    try {
      setLoading(true);
      if(!name.trim("")){
        toast.error("Please fill the name");
        return;
      }

      if(!email.trim("")){
        toast.error("Please fill the email");
        return;
      }


      if(!message.trim("")){
        toast.error("Please fill the message");
        return;
      }

      const messagesCollection = collection(db, "messages");

      // Add a new document with the current timestamp, name, email, and message
      await addDoc(messagesCollection, {
        timestamp: serverTimestamp(),
        name: name,
        email: email,
        message: message,
      });
      setLoading(false);

      toast.success("Message added successfully!");
      console.log("Message added successfully!");
    } catch (error) {
      toast.error("Somthing went wrong");
      setLoading(false);

      console.error("Error adding message:", error);
    }
  };

  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="bg-[#1e1e1f] rounded-md p-4  max-w-[80vw]   border-[1px] border-[#333333] flex gap-[10px]  top-10 pb-[80px]"
    >
      <div>
        <h1 className="font-bold text-2xl text-white text-left">Contact Me</h1>
        <div className="underline w-[80px] h-[5px] rounded-full"></div>
        <div className="flex flex-wrap items-start gap-[30px] justify-center">
          <ContactCard />
          <div>
            <h1 className="font-bold text-xl text-white">Send me a message</h1>
            <Form
              add={addMessage}
              setName={setName}
              setMessage={setMessage}
              setEmail={seEmail}
              email={email}
              name={name}
              message={message}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

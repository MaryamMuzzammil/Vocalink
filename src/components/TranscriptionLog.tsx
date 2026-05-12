import React from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'agent';
  text: string;
}

interface TranscriptionLogProps {
  messages: Message[];
}

const TranscriptionLog: React.FC<TranscriptionLogProps> = ({ messages }) => {
  return (
    <div className="w-full max-w-2xl mt-8 space-y-4 overflow-y-auto max-h-[400px] pr-4 custom-scrollbar">
      {messages.length === 0 ? (
        <div className="text-center py-20 text-white/20 italic">
          No conversations yet. Start speaking to see the transcript.
        </div>
      ) : (
        messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.type === 'user'
                  ? 'bg-purple-600/20 text-purple-100 border border-purple-500/20 rounded-tr-none'
                  : 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
              } glass`}
            >
              <div className="text-[10px] uppercase tracking-widest mb-1 opacity-40">
                {msg.type === 'user' ? 'You' : 'VocaLink'}
              </div>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default TranscriptionLog;

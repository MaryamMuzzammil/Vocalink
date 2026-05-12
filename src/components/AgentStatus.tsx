import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Loader2, Volume2 } from 'lucide-react';

export type Status = 'idle' | 'listening' | 'thinking' | 'speaking';

interface AgentStatusProps {
  status: Status;
}

const AgentStatus: React.FC<AgentStatusProps> = ({ status }) => {
  const statusConfig = {
    idle: {
      icon: <Mic className="w-6 h-6" />,
      text: 'Click to Start',
      color: 'bg-white/10 text-white/60',
    },
    listening: {
      icon: <Mic className="w-6 h-6 animate-pulse" />,
      text: 'Listening...',
      color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    },
    thinking: {
      icon: <Loader2 className="w-6 h-6 animate-spin" />,
      text: 'Thinking...',
      color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    },
    speaking: {
      icon: <Volume2 className="w-6 h-6" />,
      text: 'VocaLink is speaking',
      color: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          className={`px-6 py-3 rounded-full flex items-center gap-3 glass ${config.color} transition-all duration-300`}
        >
          {config.icon}
          <span className="font-semibold tracking-wide">{config.text}</span>
        </motion.div>
      </AnimatePresence>
      
      {status === 'listening' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-white/40 uppercase tracking-[0.2em]"
        >
          AI is processing your voice
        </motion.div>
      )}
    </div>
  );
};

export default AgentStatus;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Paperclip, Send, X, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot({ lang }: { lang: 'en' | 'es' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session
  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: "You are Clippy 2.0, a highly intelligent, modern, and slightly witty AI assistant. You look like a sleek, glowing neon paperclip. Your job is to help users understand tech jargon, programming concepts, and acronyms. Keep your answers concise, accurate, and easy to understand. Respond in the language the user uses (English or Spanish). If they ask who you are, introduce yourself as the modern, upgraded version of Clippy.",
        }
      });
    }
  }, []);

  // Set initial greeting based on language
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'init',
          role: 'model',
          text: lang === 'en' 
            ? "Hi! I'm Clippy 2.0 ✨. Need help decoding more tech jargon?" 
            : "¡Hola! Soy Clippy 2.0 ✨. ¿Necesitas ayuda para decodificar más jerga tecnológica?"
        }
      ]);
    }
  }, [lang, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '' }]);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: userMsg });
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: msg.text + c.text } : msg
          ));
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId ? { ...msg, text: lang === 'en' ? "Oops, my circuits got tangled. Try again?" : "Ups, mis circuitos se enredaron. ¿Intentamos de nuevo?" } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center border-2 border-emerald-400 hover:bg-emerald-400 transition-colors"
      >
        <Paperclip className="w-6 h-6" />
        <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full animate-pulse" />
      </motion.button>

      {/* Sidebar Chat */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-zinc-950/95 backdrop-blur-2xl border-l border-zinc-800/50 z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-4 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Paperclip className="w-5 h-5 text-emerald-400" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,1)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 font-mono tracking-tight flex items-center gap-1">
                      Clippy 2.0 <Sparkles className="w-3 h-3 text-emerald-400" />
                    </h3>
                    <p className="text-xs text-emerald-500/80 font-medium">
                      {lang === 'en' ? 'Powered by Gemini 3.1 Pro' : 'Impulsado por Gemini 3.1 Pro'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-emerald-500 text-black rounded-tr-sm'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-sm'
                      }`}
                    >
                      {msg.role === 'model' && msg.text === '' ? (
                        <div className="flex items-center gap-2 h-6">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      ) : (
                        <div className={`markdown-body text-sm ${msg.role === 'user' ? 'text-black font-medium' : ''}`}>
                          <Markdown>{msg.text}</Markdown>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-zinc-800/50 bg-zinc-900/30">
                <form onSubmit={handleSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={lang === 'en' ? 'Ask Clippy 2.0...' : 'Pregúntale a Clippy 2.0...'}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-zinc-100 placeholder:text-zinc-600"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 p-2 rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-colors"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

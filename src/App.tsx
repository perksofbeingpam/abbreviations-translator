import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, X, Terminal, Cpu, Brain, Lightbulb, BookOpen, Code, Briefcase } from 'lucide-react';
import { terms, Term, Language, Category } from './data/terms';
import Chatbot from './components/Chatbot';

const categoryIcons: Record<Category, React.ReactNode> = {
  AI: <Brain className="w-4 h-4" />,
  Dev: <Terminal className="w-4 h-4" />,
  Hardware: <Cpu className="w-4 h-4" />,
  Concept: <Lightbulb className="w-4 h-4" />,
  Web: <Code className="w-4 h-4" />,
  Business: <Briefcase className="w-4 h-4" />,
};

const categoryColors: Record<Category, string> = {
  AI: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  Dev: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Hardware: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  Concept: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Web: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
  Business: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
};

const categories: (Category | 'All')[] = ['All', 'AI', 'Dev', 'Web', 'Hardware', 'Business', 'Concept'];

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTerm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTerm]);

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        term.acronym.toLowerCase().includes(query) ||
        term[lang].title.toLowerCase().includes(query) ||
        term[lang].description.toLowerCase().includes(query);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  const t = {
    title: lang === 'en' ? 'TECH JARGON DECODER' : 'DECODIFICADOR TECH',
    subtitle: lang === 'en' ? 'Understand the acronyms everyone is using.' : 'Entiende las siglas que todo el mundo usa.',
    searchPlaceholder: lang === 'en' ? 'Search acronyms (e.g., LLM, API)...' : 'Buscar siglas (ej. LLM, API)...',
    example: lang === 'en' ? 'EXAMPLE IN CONTEXT' : 'EJEMPLO EN CONTEXTO',
    noResults: lang === 'en' ? 'No terms found matching your criteria.' : 'No se encontraron términos con esos criterios.',
    all: lang === 'en' ? 'All' : 'Todos',
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-emerald-500/30 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Marquee Header */}
      <div className="relative z-10 w-full overflow-hidden bg-emerald-500 text-black py-2 border-b border-emerald-400">
        <div className="flex whitespace-nowrap animate-marquee font-mono font-bold text-sm tracking-widest uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4">
              /// {t.title} /// DEMYSTIFYING TECH JARGON /// AI /// DEV /// WEB /// HARDWARE 
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 font-mono">
              {t.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-emerald-500' : 'text-white'}>{word} </span>
              ))}
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl">{t.subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-72 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-sm font-bold tracking-wider"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="uppercase">{lang}</span>
            </button>
          </div>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-zinc-100 text-black border-zinc-100'
                  : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              {cat === 'All' ? t.all : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredTerms.length === 0 ? (
          <div className="text-center py-32 border border-zinc-800/50 rounded-3xl bg-zinc-900/20 backdrop-blur-sm">
            <p className="text-zinc-500 font-mono">{t.noResults}</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence>
              {filteredTerms.map((term) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  key={term.id}
                  onClick={() => setSelectedTerm(term)}
                  className="group relative flex flex-col items-start p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:bg-zinc-800/60 transition-all overflow-hidden text-left"
                >
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`px-2.5 py-1 rounded-md border flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mb-6 ${categoryColors[term.category]}`}>
                    {categoryIcons[term.category]}
                    {term.category}
                  </div>
                  
                  <span className="text-4xl font-black tracking-tighter text-zinc-100 mb-3 font-mono group-hover:text-emerald-400 transition-colors">
                    {term.acronym}
                  </span>
                  <span className="text-sm text-zinc-400 font-medium leading-snug line-clamp-2">
                    {term[lang].title}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Massive Modal */}
      <AnimatePresence>
        {selectedTerm && (
          <>
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              onClick={() => setSelectedTerm(null)}
              className="fixed inset-0 bg-black/80 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[40px] shadow-2xl h-[90vh] sm:h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 sm:px-12 sm:py-8 border-b border-zinc-900">
                <div className={`px-4 py-2 rounded-full border flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${categoryColors[selectedTerm.category]}`}>
                  {categoryIcons[selectedTerm.category]}
                  {selectedTerm.category}
                </div>
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:px-12 sm:py-12">
                <div className="max-w-4xl mx-auto">
                  {/* Massive Typography */}
                  <h2 className="text-[15vw] sm:text-[120px] leading-none font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600 mb-6">
                    {selectedTerm.acronym}
                  </h2>
                  
                  <h3 className="text-2xl sm:text-4xl font-medium text-emerald-400 mb-12 tracking-tight">
                    {selectedTerm[lang].title}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                      <p className="text-zinc-300 leading-relaxed text-xl sm:text-2xl font-light">
                        {selectedTerm[lang].description}
                      </p>
                    </div>

                    <div className="md:col-span-1">
                      <div className="bg-zinc-900/50 rounded-3xl p-6 sm:p-8 border border-zinc-800/50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-emerald-500" />
                          {t.example}
                        </h4>
                        <p className="text-zinc-200 text-lg italic leading-relaxed">
                          "{selectedTerm[lang].example}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modern Clippy Chatbot */}
      <Chatbot lang={lang} />
    </div>
  );
}

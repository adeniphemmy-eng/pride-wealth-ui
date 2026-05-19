import React from 'react';
import { Home, Send, PiggyBank, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'transfer', icon: Send, label: 'Send' },
    { id: 'savings', icon: PiggyBank, label: 'Save' },
    { id: 'account', icon: User, label: 'Account' },
  ];

  return (
    <div className="max-w-md mx-auto relative bg-white min-h-screen shadow-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="pb-24 pt-4 px-4"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === item.id ? 'text-violet-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <item.icon className={`w-6 h-6 ${currentPage === item.id ? 'fill-violet-50/50' : ''}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">{item.label}</span>
            {currentPage === item.id && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-violet-600"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};
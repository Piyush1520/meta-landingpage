import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-[80px] md:h-[92px] bg-black/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4">
        <div
          className="flex items-center shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/logo.png"
            alt="Savvy Indians"
            className="h-[104px] sm:h-[108px] md:h-[117px] w-auto max-w-[210px] md:max-w-[250px] object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="#about" className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-primary transition-all">
            Strategy
          </a>
          <a href="#curriculum" className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-primary transition-all">
            Curriculum
          </a>
          <a href="#testimonials" className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-primary transition-all">
            Stories
          </a>
          <a href="#faq" className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-primary transition-all">
            FAQ
          </a>
        </nav>

        <div className="flex items-center justify-end shrink-0">
          <Button
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl px-4 sm:px-6 md:px-8 h-10 md:h-12 font-bold uppercase tracking-widest glow-orange text-[10px] md:text-xs"
          >
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

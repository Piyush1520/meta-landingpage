import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sparkles, Calendar, Zap } from 'lucide-react';

export function FooterCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative glass border-primary/40 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase">
                Final Call to Action
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-10 leading-[0.95] uppercase"
            >
              Be there or <br/>
              <span className="text-primary font-black uppercase">miss out entirely.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary-foreground mb-12 font-medium"
            >
              This Saturday. Exclusive. Live. Life-changing. Limited seats. No recording.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-10"
            >
              <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 flex items-center justify-center gap-3 w-fit animate-bounce">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base font-black text-primary uppercase tracking-tight">
                  200+ entrepreneurs & marketers have already registered
                </span>
              </div>

              <Button 
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="xl" className="w-full md:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-2xl font-black rounded-2xl md:rounded-3xl glow-orange uppercase tracking-wider group transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
              >
                Claim My Seat →
              </Button>
            </motion.div>
            
            <div className="mt-16 flex items-center justify-center gap-8 text-[10px] font-black text-secondary-foreground/40 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">LEGAL NOTICE</span>
              <span className="flex items-center gap-2">•</span>
              <span className="flex items-center gap-2">NOT AFFILIATED WITH META</span>
              <span className="flex items-center gap-2">•</span>
              <span className="flex items-center gap-2">NO SPAM GUARANTEE</span>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-secondary-foreground/40 text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3 text-foreground/20 group cursor-pointer hover:text-primary transition-colors">
            <Zap className="w-5 h-5 fill-current" />
            <span className="tracking-tighter">SAVVY INDIANS MASTERCLASS. &copy; 2026. All Rights Reserved.</span>
          </div>
          <div className="flex gap-8">
            <span className="text-foreground/10">Building a smarter tomorrow with AI.</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

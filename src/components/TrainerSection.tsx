import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Briefcase, GraduationCap, Github, Zap } from 'lucide-react';

export function TrainerSection() {
  return (
    <section className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Trainer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative justify-self-center md:justify-self-start w-full group"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[750px] overflow-hidden rounded-[4rem] border border-white/10 glass shadow-2xl">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />
              
              <img 
                src="/tannu.webp" 
                alt="Trainer Tannu" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white uppercase block leading-none">Top 1% Expert</span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Verified Strategist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-6 rounded-[2.5rem] border-primary/30 shadow-2xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Zap className="w-7 h-7 text-primary fill-current" />
                </div>
                <div>
                  <p className="text-3xl font-black text-primary leading-none">10X</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary-foreground">Scale</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trainer Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/20 text-primary mb-6 font-black uppercase tracking-widest px-4 py-1">Meet Your Mentor</Badge>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
              Tannu
            </h2>
            
            <p className="text-xl text-foreground font-black uppercase mb-4">Meta Ads Specialist & AI Marketing Strategist</p>
            <p className="text-lg text-secondary-foreground mb-10 leading-relaxed max-w-xl font-medium">
              With years of hands-on experience managing crores in Meta Ad spend, I've helped 500+ businesses cut costs and scale profitably — now using AI to do it 10x faster.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col gap-1 p-4 glass border-white/5 rounded-2xl">
                <span className="text-2xl font-black text-primary">500+</span>
                <span className="text-[10px] text-secondary-foreground uppercase font-black tracking-widest">Businesses Trained</span>
              </div>
              <div className="flex flex-col gap-1 p-4 glass border-white/5 rounded-2xl">
                <span className="text-2xl font-black text-primary">₹10Cr+</span>
                <span className="text-[10px] text-secondary-foreground uppercase font-black tracking-widest">Ad Spend Managed</span>
              </div>
              <div className="flex flex-col gap-1 p-4 glass border-white/5 rounded-2xl">
                <span className="text-2xl font-black text-primary">5 Yrs</span>
                <span className="text-[10px] text-secondary-foreground uppercase font-black tracking-widest">In Meta Ads</span>
              </div>
            </div>

            <div className="p-8 glass border-primary/20 rounded-[2.5rem] bg-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <p className="text-lg text-foreground mb-6 font-medium relative z-10">
                "My mission is simple: To show you that you don't need a massive team or a massive budget. You just need massive intelligence—the kind only AI can provide."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <span className="font-heading font-black uppercase tracking-[0.2em] text-xs text-primary">Tannu • Lead Trainer</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

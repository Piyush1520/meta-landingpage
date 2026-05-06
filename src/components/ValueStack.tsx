import { motion } from 'framer-motion';
import { Check, Star, Gem, BookOpen, MessageSquare, HelpCircle, Gift } from 'lucide-react';
import { Button } from './ui/button';

const items = [
  { title: "90-min live masterclass", desc: "Hands-on training with real-time demonstrations", value: "₹2,999" },
  { title: "AI Prompt Library PDF", desc: "50+ battle-tested prompts for Meta Ads — yours to keep", value: "₹999" },
  { title: "Ad Copy Swipe File", desc: "10 proven ad frameworks you can deploy immediately", value: "₹499" },
  { title: "Live Q&A session", desc: "Get your specific questions answered on the spot", value: "₹499" },
  { title: "Private community access", desc: "Join a group of AI-forward marketers & entrepreneurs", value: "Priceless" },
];

export function ValueStack() {
  return (
    <section className="py-24 px-6 relative bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass border-primary/30 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[100px]" />
          
          <div className="relative z-10 text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 font-bold uppercase py-1">Everything Included</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-6 uppercase leading-none">Your Masterclass <br/> <span className="text-primary">Bundle</span></h2>
            <p className="text-secondary-foreground max-w-xl mx-auto font-medium text-lg">Register today and receive all of this — completely included.</p>
          </div>

          <div className="space-y-4 mb-12">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:border-primary/20 transition-all group gap-4"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 uppercase">{item.title}</h4>
                    <p className="text-sm text-secondary-foreground font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end md:self-center">
                  <span className="text-sm line-through text-white/20 font-bold">{item.value}</span>
                  <span className="text-xl font-black text-primary">INCLUDED</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/10 text-center relative z-10">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <span className="text-xl md:text-2xl font-bold text-white/30 uppercase">Valued at ₹4,999 — yours this Saturday</span>
              <div className="bg-primary px-6 py-2 rounded-full text-primary-foreground text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">VALUED AT ₹4,999</div>
            </div>
            
            <Button 
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="xl" className="w-full md:w-auto h-16 md:h-20 px-6 md:px-12 rounded-2xl md:rounded-3xl text-lg md:text-2xl font-bold glow-orange uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
            >
              Claim My Access Now →
            </Button>
            
            <p className="mt-8 text-xs text-secondary-foreground font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3">
              <Star className="w-4 h-4 fill-primary text-primary animate-spin-slow" /> Strictly No Recording • Live Attendance Required <Star className="w-4 h-4 fill-primary text-primary animate-spin-slow" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Badge } from './ui/badge';

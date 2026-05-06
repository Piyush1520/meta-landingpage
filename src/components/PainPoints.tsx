import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, TrendingDown, TrendingUp, Clock, Zap, Wallet, DollarSign, PenTool, BarChart, Target } from 'lucide-react';
import { Card } from './ui/card';

const struggles = [
  { icon: XCircle, text: "Spending hours writing ad copy that barely converts" },
  { icon: TrendingDown, text: "Guessing at audiences and burning your budget" },
  { icon: Wallet, text: "Paying agencies thousands for work AI does in minutes" },
  { icon: BarChart, text: "Scaling feels impossible — results hit a ceiling" },
];

const transformations = [
  { icon: Zap, title: "10 Variations in 60s", desc: "Generate high-converting ad variants in seconds, not hours." },
  { icon: Target, title: "Precision Targeting", desc: "Pinpoint your ideal audience using proven AI prompts." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Scale with confidence using data-driven AI insights." },
  { icon: DollarSign, title: "Cut Creative Costs", desc: "Launch faster than ever without high agency fees." },
];

export function PainPoints() {
  return (
    <section id="about" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Does this sound familiar?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            The Old Way is <span className="text-primary">Costing You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground text-xl max-w-2xl mx-auto font-medium"
          >
            Running Meta Ads without AI is like driving blind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-red-500/30" />
              <h3 className="text-xl font-black uppercase tracking-widest text-red-400">The Problem</h3>
            </div>
            <div className="grid gap-4">
              {struggles.map((item, i) => (
                <Card key={i} className="glass border-red-500/10 p-6 flex items-center gap-5 hover:bg-red-500/5 transition-all duration-300 group rounded-2xl">
                  <div className="p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="text-secondary-foreground font-bold text-lg">{item.text}</span>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-primary/30" />
              <h3 className="text-xl font-black uppercase tracking-widest text-primary">The Solution</h3>
            </div>
            <div className="grid gap-4">
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-[2rem] mb-4">
                <p className="text-primary font-black text-xl mb-1 uppercase italic">After this masterclass...</p>
                <p className="text-sm text-secondary-foreground font-medium">You'll be able to dominate the newsfeed with AI precision.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {transformations.map((item, i) => (
                  <Card key={i} className="glass border-primary/20 p-6 relative overflow-hidden group hover:bg-primary/5 transition-all duration-500 rounded-2xl">
                    <div className="relative z-10 flex flex-col gap-3">
                      <div className="p-2 w-fit rounded-lg bg-primary/10 border border-primary/20">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h4>
                      <p className="text-xs text-secondary-foreground leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

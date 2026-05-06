import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { PenTool, Search, Layout, LineChart, Cpu, Zap, Target, MousePointer2, MessageSquare } from 'lucide-react';

const topics = [
  {
    title: "Write irresistible ad copy with AI",
    desc: "Use Claude & ChatGPT to generate scroll-stopping headlines and body text tailored to your audience.",
    icon: PenTool,
    color: "from-orange-500/20 to-primary/20",
    size: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Build high-converting Meta audiences",
    desc: "Let AI reverse-engineer your ideal customer and suggest laser-targeted interest stacks.",
    icon: Target,
    color: "from-blue-500/20 to-cyan-500/20",
    size: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Creative briefs in under 5 minutes",
    desc: "Generate complete creative briefs for designers or Canva — no more staring at a blank screen.",
    icon: Layout,
    color: "from-purple-500/20 to-pink-500/20",
    size: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Analyse & optimise campaigns with AI",
    desc: "Paste your data into ChatGPT and get actionable optimisation insights instantly.",
    icon: LineChart,
    color: "from-red-500/20 to-orange-500/20",
    size: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Swipe-worthy prompt library",
    desc: "Get our proven prompt templates so you can replicate results the moment the session ends.",
    icon: Cpu,
    color: "from-green-500/20 to-emerald-500/20",
    size: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Live Q&A — your questions answered",
    desc: "Bring your campaigns. Get real-time AI-powered advice specific to your business.",
    icon: MessageSquare,
    color: "from-yellow-500/20 to-amber-500/20",
    size: "md:col-span-1 lg:col-span-1"
  }
];

export function WhatYouWillLearn() {
  return (
    <section id="curriculum" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary font-black tracking-widest text-xs uppercase mb-4"
            >
              <Zap className="w-4 h-4" /> Step-by-step frameworks. Real examples. Zero fluff.
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-black mb-4"
            >
              Inside This <br/> <span className="text-primary">Masterclass</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary-foreground text-lg max-w-sm font-medium"
          >
            A cohesive curriculum designed to take you from a standard advertiser to an AI-powered growth engine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={topic.size}
            >
              <Card className="glass h-full p-8 group relative overflow-hidden hover:border-primary/40 transition-all duration-500 rounded-[2rem]">
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <topic.icon className="w-7 h-7 text-white group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-4xl font-heading font-black text-white/5 group-hover:text-primary/20 transition-colors">0{i+1}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase">{topic.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed font-medium">
                    {topic.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

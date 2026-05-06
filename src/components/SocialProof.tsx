import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: "Rahul K.",
    role: "Digital Marketing Freelancer",
    content: "I used to spend 3 hours writing ad copy. After this session I did it in 8 minutes using Claude. Game changer for my agency.",
    avatar: "https://i.pravatar.cc/150?u=rahulk"
  },
  {
    name: "Priya S.",
    role: "E-commerce Founder",
    content: "My cost per lead dropped by 40% in the first week after applying the AI audience strategy. This is genuinely worth ₹10,000 — and it's unmissable.",
    avatar: "https://i.pravatar.cc/150?u=priyas"
  },
  {
    name: "Arjun M.",
    role: "Business Owner, Pune",
    content: "I was completely new to AI tools. The session was practical, not theoretical. I left with prompts I could use the very same day.",
    avatar: "https://i.pravatar.cc/150?u=arjunm"
  }
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Social proof
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase"
          >
            What Our Attendees <br/> <span className="text-primary font-black">Are Saying</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary-foreground text-lg font-medium"
          >
            Real results from real people who attended a previous session.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass p-8 relative hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] rounded-[2rem] border-white/5">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-8 font-medium">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 overflow-hidden shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase">{t.name}</h4>
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Social Ticker */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap items-center py-4"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap text-xl font-heading font-bold text-secondary-foreground">
                <span>REVOLUTIONIZING META ADS</span>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>AI POWERED GROWTH</span>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>PREMIUM MASTERCLASS</span>
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

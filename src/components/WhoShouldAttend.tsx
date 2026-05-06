import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Briefcase, UserCheck, Rocket, Zap } from 'lucide-react';

const targets = [
  {
    title: "Business Owners",
    desc: "Running your own ads and want to slash costs while increasing ROAS.",
    icon: Briefcase
  },
  {
    title: "Freelance Marketers",
    desc: "Scale your agency by producing 10x the work in 10% of the time.",
    icon: UserCheck
  },
  {
    title: "Entrepreneurs",
    desc: "Ready to automate your marketing and focus on building your product.",
    icon: Rocket
  },
  {
    title: "Beginners",
    desc: "Ready to learn advanced AI tools from day one without technical overwhelm.",
    icon: Zap
  }
];

export function WhoShouldAttend() {
  return (
    <section className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Who should attend
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">Built For You <span className="text-primary">If You Are...</span></h2>
          <p className="text-secondary-foreground text-lg font-medium">No prior AI experience required.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {targets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass p-8 h-full border-white/5 hover:border-primary/20 transition-all rounded-[2rem] flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

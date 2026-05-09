import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import {
  Terminal,
  Users,
  PlayCircle,
  Zap,
  MessageSquare,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxe4KUoZ5CivXjFt47S3ZmLIlL58lADJtzAOBxY577bFzD4k8iYdG6wfUt-m6MI_Rl-nA/exec';
const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/JuplKQlRA88AphYwf4lvL3';

const MASTERCLASS_DATE_TIME = '2026-05-16T20:00:00+05:30';

function getTimeLeft(targetDate: Date) {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isStarted: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isStarted: false,
  };
}

function formatEventDate(targetDate: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  })
    .format(targetDate)
    .replace(',', ' |');
}

function formatEventDay(targetDate: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
  }).format(targetDate);
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isStarted) {
    return (
      <div className="glass rounded-2xl border-white/5 p-5 text-primary font-black uppercase tracking-widest">
        Masterclass is live now
      </div>
    );
  }

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 max-w-xl">
      {timerItems.map((item) => (
        <div key={item.label} className="glass rounded-2xl border-white/5 p-4 text-center">
          <div className="text-2xl md:text-3xl font-black text-primary leading-none">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[9px] md:text-[10px] text-secondary-foreground uppercase font-black tracking-widest mt-2">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const masterclassDate = useMemo(() => new Date(MASTERCLASS_DATE_TIME), []);
  const eventDateLabel = useMemo(() => formatEventDate(masterclassDate), [masterclassDate]);
  const eventDayLabel = useMemo(() => formatEventDay(masterclassDate), [masterclassDate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setMessage('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      form.reset();
      setRole('');
      setIsSubmitted(true);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-32"
        >
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-primary/30 bg-primary/10 text-primary flex items-center gap-2 animate-pulse font-bold uppercase tracking-wider text-[10px]">
              <span className="w-2 h-2 rounded-full bg-primary" />
              LIVE MASTERCLASS
            </Badge>
            <span className="text-sm text-secondary-foreground font-bold uppercase">
              {eventDateLabel}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 leading-[1.1]">
            Run Smarter <br />
            Meta Ads Using <br />
            <span className="text-primary relative inline-block">
              Claude & ChatGPT
              <motion.div
                className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full z-[-1]"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground mb-12 max-w-xl leading-relaxed font-medium">
            A live, hands-on masterclass revealing how top marketers are using AI to craft high-converting ad copies, audiences & creatives — in minutes, not days.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="flex flex-col gap-2 p-4 glass rounded-2xl border-white/5">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold">This {eventDayLabel}</span>
            </div>
            <div className="flex flex-col gap-2 p-4 glass rounded-2xl border-white/5">
              <PlayCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold">3 hrs Live</span>
            </div>
            <div className="flex flex-col gap-2 p-4 glass rounded-2xl border-white/5">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold">Zoom Link</span>
            </div>
            <div className="flex flex-col gap-2 p-4 glass rounded-2xl border-white/5">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold uppercase">Exclusive Entry</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-bold text-secondary-foreground/60 uppercase tracking-widest block">
              Event starts in:
            </span>
            <CountdownTimer targetDate={masterclassDate} />
          </div>
        </motion.div>

        <motion.div
          id="registration-form"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative pt-8 lg:pt-0"
        >
          <div className="glass p-8 md:p-10 rounded-[2.5rem] relative z-10 border-white/10 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[640px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-11 h-11 text-primary" />
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-black uppercase mb-4">
                  Successfully Submitted
                </h3>

                <p className="text-secondary-foreground text-base md:text-lg leading-relaxed max-w-md mb-8 font-medium">
                  You have successfully submitted your registration. Join our WhatsApp community for more updates.
                </p>

                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-md h-16 rounded-xl md:rounded-2xl glow-orange bg-primary text-primary-foreground flex items-center justify-center text-sm md:text-base font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02]"
                >
                  Join WhatsApp Community →
                </a>

                <p className="text-[11px] md:text-xs text-secondary-foreground uppercase tracking-widest font-bold mt-8 max-w-md">
                  Our team will also call you within 24 working hours.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 uppercase">
                    Reserve Your Spot
                  </h3>
                  <p className="text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">
                    Limited seats available. Reserve now.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground flex items-center gap-2">
                        <Users className="w-3 h-3" /> Full Name
                      </label>
                      <Input name="fullName" required className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-base rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground flex items-center gap-2">
                        <Terminal className="w-3 h-3" /> Email Address
                      </label>
                      <Input name="email" required type="email" className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-base rounded-xl" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground flex items-center gap-2">
                        <MessageSquare className="w-3 h-3" /> Phone Number
                      </label>
                      <Input name="phone" required type="tel" className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-base rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> City
                      </label>
                      <Input name="city" required className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-base rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground">
                      Which best describes you?
                    </label>
                    <div className="space-y-3">
                      <select
                        name="role"
                        className="w-full h-14 bg-white/[0.03] border border-white/10 focus:border-primary/50 text-base rounded-xl px-4 appearance-none text-white font-medium"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="" className="bg-background">Select your role</option>
                        <option value="student" className="bg-background">Student</option>
                        <option value="professional" className="bg-background">Working Professional</option>
                        <option value="freelancer" className="bg-background">Freelancer / Consultant</option>
                        <option value="business-owner" className="bg-background">Business Owner</option>
                        <option value="content-creator" className="bg-background">Content Creator</option>
                        <option value="agency" className="bg-background">Agency / Marketing</option>
                        <option value="coach" className="bg-background">Coach / Consultant</option>
                        <option value="other" className="bg-background">Other</option>
                      </select>

                      {role === 'other' && (
                        <Input name="otherRole" placeholder="Please mention your role" className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-base rounded-xl" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground">
                      Have you ever run Meta ads before?
                    </label>
                    <select
                      name="metaAdsExperience"
                      className="w-full h-14 bg-white/[0.03] border border-white/10 focus:border-primary/50 text-base rounded-xl px-4 appearance-none text-white font-medium"
                      required
                      defaultValue=""
                    >
                      <option value="" className="bg-background">Choose option</option>
                      <option value="yes" className="bg-background">Yes, I have run ads before</option>
                      <option value="tried-no-results" className="bg-background">I tried but did not get results</option>
                      <option value="no-want-to-learn" className="bg-background">No, but I want to learn</option>
                      <option value="manage-clients" className="bg-background">I manage ads for clients...</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-secondary-foreground">
                      Why do you want to attend this masterclass?
                    </label>
                    <select
                      name="reason"
                      className="w-full h-14 bg-white/[0.03] border border-white/10 focus:border-primary/50 text-base rounded-xl px-4 appearance-none text-white font-medium"
                      required
                      defaultValue=""
                    >
                      <option value="" className="bg-background">Choose option</option>
                      <option value="for-business" className="bg-background">To run ads for my business</option>
                      <option value="for-freelancing" className="bg-background">To get clients as a freelancer</option>
                      <option value="for-agency" className="bg-background">To improve my agency services</option>
                      <option value="for-tools" className="bg-background">To learn AI tools for marketing</option>
                      <option value="for-career" className="bg-background">To start a career in digital marketing</option>
                      <option value="just-exploring" className="bg-background">Just exploring</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full h-16 md:h-18 text-base md:text-lg font-bold rounded-xl md:rounded-2xl glow-orange group transition-all duration-300 uppercase tracking-widest shadow-2xl shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register Now →'}
                  </Button>

                  {message && (
                    <p className="text-center text-xs font-bold uppercase tracking-wider text-primary">
                      {message}
                    </p>
                  )}

                  <div className="text-center pt-4 border-t border-white/5 space-y-3">
                    <p className="text-[10px] text-secondary-foreground uppercase tracking-widest font-bold">
                      No spam. Ever. Zoom link delivered to your inbox instantly.
                    </p>
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 w-fit mx-auto">
                      <Zap className="w-3 h-3 text-primary animate-pulse" />
                      <span className="text-[10px] text-primary font-black uppercase">
                        200+ entrepreneurs & marketers already registered
                      </span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="absolute -z-10 blur-[100px] opacity-20 bg-primary w-full h-full inset-0 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

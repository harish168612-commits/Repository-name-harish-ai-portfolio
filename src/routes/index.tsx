import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Code2,
  Database,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import aiVisual from "@/assets/harish-ai-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chepena Harish — Python & Generative AI Developer" },
      { name: "description", content: "Explore Chepena Harish's software development portfolio, AI experience, technical skills, projects, and education." },
      { property: "og:title", content: "Chepena Harish — Python & Generative AI Developer" },
      { property: "og:description", content: "Software developer portfolio featuring Python, Generative AI, NLP, RAG, Flask, and database projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = ["home", "about", "skills", "experience", "projects", "education", "contact"];
const skillGroups = [
  { title: "Programming & database", icon: Code2, skills: ["Python", "C", "MySQL", "PostgreSQL"] },
  { title: "AI & machine learning", icon: Sparkles, skills: ["Generative AI", "NLP", "RAG", "Large Language Models", "Machine Learning"] },
  { title: "Frameworks", icon: Braces, skills: ["Flask", "AI-driven application development"] },
  { title: "Professional", icon: Terminal, skills: ["Communication", "Problem Solving", "Leadership"] },
];
const achievements = [
  ["92%", "Fake news classification accuracy"],
  ["30%", "Reported increase in user engagement"],
  ["1,000+", "Concurrent voting system users"],
  ["99.9%", "Peak voting uptime"],
  ["30%", "Reduction in voting discrepancies"],
];
const education = [
  { degree: "B.Tech", school: "Satya Institute of Technology and Management", period: "2023–2027", place: "Vizianagaram, Andhra Pradesh", gpa: "7.4" },
  { degree: "Intermediate", school: "Kavitha Junior College", period: "2021–2023", place: "Srikakulam", gpa: "8.3" },
  { degree: "SSC", school: "Sri Chaitanya School", period: "2020–2021", place: "Srikakulam", gpa: "10" },
];
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(140),
  message: z.string().trim().min(10).max(1500),
});

function SectionHead({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="mb-12"><div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase text-primary"><span>{number}</span><span className="h-px w-10 bg-primary" /><span>{label}</span></div><h2 className="display-type max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h2></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState("");

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = contactSchema.safeParse(data);
    if (!result.success) { setFormError("Please complete every field with valid details."); return; }
    setFormError("");
    const subject = encodeURIComponent(result.data.subject);
    const body = encodeURIComponent(`From: ${result.data.name} (${result.data.email})\n\n${result.data.message}`);
    window.location.href = `mailto:harishlucky198@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="display-type text-xl font-bold">Harish<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">{nav.map((item) => <a key={item} href={`#${item}`} className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary">{item}</a>)}</nav>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex size-10 items-center justify-center text-foreground md:hidden" aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 md:hidden">{nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block py-2 capitalize text-muted-foreground">{item}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="grid-fade relative flex min-h-[94svh] items-center overflow-hidden border-b border-border pt-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 border border-border bg-surface px-3 py-2 font-mono text-xs text-muted-foreground"><span className="size-2 rounded-full bg-primary pulse-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
              <p className="mb-4 text-sm font-semibold uppercase text-primary">Hello, I’m</p>
              <h1 className="display-type max-w-4xl text-6xl font-bold leading-[.94] sm:text-7xl lg:text-8xl">Chepena<br/><span className="text-primary">Harish.</span></h1>
              <p className="display-type mt-6 text-xl font-medium text-foreground md:text-2xl">Software Developer <span className="text-muted-foreground">|</span> Python & Generative AI Enthusiast</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Detail-oriented software developer with a strong foundation in Python, C, MySQL, algorithm design, database management, and Generative AI. Passionate about building reliable, efficient, and intelligent software solutions.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">View Projects <ArrowDownRight size={17}/></a><a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary">Contact Me <ArrowRight size={17}/></a></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 border border-primary/20" />
              <img src={aiVisual} width={1200} height={1400} alt="Abstract neural network and software architecture visualization" className="float-soft relative aspect-[6/7] w-full object-cover" />
              <div className="absolute -bottom-5 -left-5 border border-border bg-surface-elevated px-4 py-3 font-mono text-xs text-primary">&gt; building intelligent systems_</div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="01" label="About" title="Curious by nature. Precise by practice."/><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="flex min-h-72 items-center justify-center border border-border bg-surface grid-fade"><div className="text-center"><div className="display-type mx-auto flex size-28 items-center justify-center rounded-full border border-primary/40 bg-background text-4xl font-bold text-primary">CH</div><p className="mt-5 font-mono text-xs text-muted-foreground">VIZIANAGARAM / INDIA</p></div></div><div className="space-y-6 text-lg leading-8 text-muted-foreground"><p className="text-2xl leading-9 text-foreground">I’m a B.Tech student at Satya Institute of Technology and Management, focused on turning strong fundamentals into dependable software.</p><p>My work spans programming, database management, algorithm design, and emerging AI technologies—including NLP, Retrieval-Augmented Generation, and Large Language Models.</p><p>I approach every problem with a practical mindset: understand the system, simplify the complexity, and build an efficient solution that performs reliably.</p></div></div></div></section>

        <section id="skills" className="bg-surface py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="02" label="Capabilities" title="A technical toolkit built for intelligent products."/><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{skillGroups.map(({title, icon: Icon, skills}) => <article key={title} className="bg-background p-7 transition-colors hover:bg-surface-elevated"><Icon className="mb-8 text-primary" size={28}/><h3 className="display-type mb-5 text-xl font-semibold">{title}</h3><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-sm border border-border bg-surface px-3 py-2 text-sm text-muted-foreground">{skill}</span>)}</div></article>)}</div></div></section>

        <section id="experience" className="border-y border-border py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="03" label="Experience" title="Applying AI to measurable outcomes."/><div className="grid gap-8 lg:grid-cols-[220px_1fr]"><div className="font-mono text-sm text-primary">2026 — PRESENT</div><article className="relative border-l border-primary pl-8"><div className="absolute -left-1.5 top-1 size-3 rounded-full bg-primary"/><p className="text-sm font-semibold uppercase text-coral">Pixel Wind</p><h3 className="display-type mt-2 text-3xl font-semibold">Python | Generative AI Intern</h3><ul className="mt-7 grid gap-4 text-muted-foreground md:grid-cols-2">{["Developed expertise in Generative AI and NLP techniques.","Worked with RAG and Large Language Models.","Engineered and deployed AI-driven applications.","Optimized performance with algorithms and data processing.","Contributed to a reported 30% increase in user engagement.","Collaborated across teams to integrate AI solutions."].map((item) => <li key={item} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 bg-primary"/>{item}</li>)}</ul></article></div></div></section>

        <section id="projects" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="04" label="Selected work" title="Systems designed around real-world results."/><div className="space-y-5"><Project number="01" title="Voting System" tech="Python • Flask • PostgreSQL" description="Engineered a Python-based voting system interface using Flask and PostgreSQL. Implemented secure user authentication and real-time validation with audit logging." tags={["1,000+ concurrent users","99.9% peak uptime","30% fewer discrepancies"]}/><Project number="02" title="Fake News Detection" tech="Generative AI • Machine Learning • NLP" description="Built a fake news detection system using Generative AI techniques and machine learning algorithms. Implemented NLP-based feature extraction and ensemble methods to improve predictive performance." tags={["92% classification accuracy","NLP feature extraction","Ensemble learning","Reduced false positives"]}/><Project number="03" title="PrepBuddyAI" tech="Technologies to be added" description="Project details will be added when verified information becomes available." tags={["Description pending","Project link pending"]}/></div></div></section>

        <section className="border-y border-border bg-primary py-12 text-primary-foreground" aria-label="Project and experience highlights"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-5 lg:px-8">{achievements.map(([value,label]) => <div key={label} className="p-5"><p className="display-type text-4xl font-bold">{value}</p><p className="mt-2 text-xs font-semibold leading-5 opacity-75">{label}</p></div>)}</div></section>

        <section id="education" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="05" label="Education" title="The foundation behind the work."/><div className="grid gap-4 lg:grid-cols-3">{education.map((item, index) => <article key={item.degree} className="border border-border bg-surface p-7"><span className="font-mono text-xs text-primary">0{index+1} / {item.period}</span><h3 className="display-type mt-8 text-2xl font-semibold">{item.degree}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{item.school}</p><div className="mt-8 flex items-end justify-between border-t border-border pt-5"><span className="text-xs text-muted-foreground">{item.place}</span><span className="display-type text-xl font-bold text-primary">{item.gpa} GPA</span></div></article>)}</div></div></section>

        <section className="border-y border-border bg-surface py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="06" label="What I can build" title="Practical development across software and AI."/><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{["Python Application Development","AI / Generative AI Applications","NLP Solutions","Machine Learning Applications","Database-Driven Applications","Flask Web Applications"].map((item, index) => <div key={item} className="group flex min-h-36 items-end justify-between bg-background p-6"><div><span className="font-mono text-xs text-muted-foreground">0{index+1}</span><h3 className="display-type mt-4 text-lg font-semibold">{item}</h3></div><ArrowDownRight className="text-primary transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/></div>)}</div></div></section>

        <section id="contact" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead number="07" label="Contact" title="Let’s build something intelligent."/><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="max-w-md text-lg leading-8 text-muted-foreground">Have an opportunity, collaboration, or interesting problem in mind? Send a message.</p><div className="mt-10 space-y-5"><ContactItem icon={Mail} label="Email" value="harishlucky198@gmail.com" href="mailto:harishlucky198@gmail.com"/><ContactItem icon={Phone} label="Phone" value="7416846169" href="tel:+917416846169"/><ContactItem icon={MapPin} label="Location" value="Vizianagaram, Andhra Pradesh"/></div></div><form onSubmit={submitContact} className="grid gap-5" noValidate><div className="grid gap-5 sm:grid-cols-2"><Field name="name" label="Name" type="text"/><Field name="email" label="Email" type="email"/></div><Field name="subject" label="Subject" type="text"/><label className="text-sm font-semibold">Message<textarea name="message" rows={6} maxLength={1500} required className="mt-2 w-full resize-none rounded-md border border-input bg-surface px-4 py-3 font-normal outline-none transition-colors focus:border-primary" placeholder="Tell me about your idea..."/></label>{formError && <p className="text-sm text-coral" role="alert">{formError}</p>}<button type="submit" className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">Send Message <Send size={16}/></button></form></div></div></section>
      </main>

      <footer className="border-t border-border bg-surface py-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between lg:px-8"><div><p className="display-type text-2xl font-bold">Chepena Harish<span className="text-primary">.</span></p><p className="mt-2 text-sm text-muted-foreground">Software Developer | Python & Generative AI Enthusiast</p><a href="mailto:harishlucky198@gmail.com" className="mt-3 block text-sm text-primary">harishlucky198@gmail.com</a></div><p className="text-xs text-muted-foreground">© 2026 Chepena Harish. All rights reserved.</p></div></footer>
    </div>
  );
}

function Project({ number, title, tech, description, tags }: { number: string; title: string; tech: string; description: string; tags: string[] }) {
  return <article className="group grid gap-8 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/60 md:grid-cols-[100px_1fr] lg:p-9"><span className="font-mono text-sm text-primary">{number}</span><div><div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start"><div><h3 className="display-type text-3xl font-semibold md:text-4xl">{title}</h3><p className="mt-2 font-mono text-xs uppercase text-coral">{tech}</p></div><div className="flex gap-2" aria-label="Project links unavailable"><span title="Project link will be added when available" className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground"><ExternalLink size={17}/></span><span title="GitHub link will be added when available" className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground"><Github size={17}/></span></div></div><p className="mt-6 max-w-3xl leading-7 text-muted-foreground">{description}</p><div className="mt-7 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-sm bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground">{tag}</span>)}</div></div></article>;
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = <><Icon size={18} className="text-primary"/><span><span className="block text-xs uppercase text-muted-foreground">{label}</span><span className="mt-1 block text-sm font-semibold">{value}</span></span></>;
  return href ? <a href={href} className="flex items-center gap-4">{content}</a> : <div className="flex items-center gap-4">{content}</div>;
}

function Field({ name, label, type }: { name: string; label: string; type: string }) {
  return <label className="text-sm font-semibold">{label}<input name={name} type={type} maxLength={type === "email" ? 255 : 140} required className="mt-2 w-full rounded-md border border-input bg-surface px-4 py-3 font-normal outline-none transition-colors focus:border-primary" /></label>;
}